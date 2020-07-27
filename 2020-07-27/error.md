### 前端错误信息监控

#### try...catch(e){}

- 可以保证页面不崩溃，并对错误进行兜底处理
- 对于代码的侵入性较强
- 语法错误, 异步错误 无法捕获

```javascript
	try{
		const a = \'a'
	}catch(e){
		console.log(e)
	}
	try{
		setTimeout(()=> a ,100)
	}catch(e){
		console.log(e)
	}
```

#### window.onerror

- 对网络错误和语法错误无能为力

```javascript
window.onerror = function (message, source, lineno, colno, error) {
  /*
			mesage 为错误信息提示
			source 为错误脚本地址
			lineno 为错误的代码所在行号
			colno 为错误的代码所在列号
			error 为错误的对象信息，比如 error.stack 获取错误的堆栈信息
		*/
};
```

#### 跨域脚本的错误处理

- 跨域之后 window.onerror 在很多浏览器中是无法捕获异常信息的，要统一返回 Script error
- 需要 script 设置 crossorigin="anonymous"
- 服务端设置 Access-Control-Allow-Origin 以指定允许哪些域的请求访问

#### 对 Promise 错误处理

- 推荐使用 catch 作为异常捕获

```javascript
new Promise((resolve, reject) => {
  resolve();
})
  .then(
    () => {
      throw new Error();
      console.log("resolved");
    },
    (err) => {
      // 这里的 reject 无法捕获前面的 error
      console.log("rejected");
      throw err;
    }
  )
  .catch((err) => {
    console.log(err, "catch");
  });
```

- 全局的 catch 处理

```JavaScript
	window.addEventListener("unhandledrejection",  e => {
    e.preventDefault()
    console.log(e.reason)
    return true
	})
```

#### 处理网络资源加载错误

```html
<script src="***.js" onerror="errorHandler(this)"></script>
<link rel="stylesheet" href="***.css" onerror="errorHandler(this)" />
<!-- window.addEventListener('error') -->
```

```javascript
window.addEventListener(
  "error",
  (error) => {
    //  区分网络资源加载错误和其他一般错误: error 对象中会有一个 error.message 属性，表示错误信息，而资源加载错误对应的 error 对象却没有
    if (!error.message) {
      // 网络资源加载错误
      console.log(error);
    }
  },
  true
);
```

#### window.onerror 与 window.addEventListener('error')的区别

- window.onerror 需要进行函数赋值：window.onerror = function() {//…}，因此重复声明后会被替换，后续赋值会覆盖之前的值。这是一个弊端。
- > 因为 window.onerror 事件是通过事件冒泡获取 error 信息的，而网络加载错误是不会进行事件冒泡的。
- > 不支持冒泡的事件还有：鼠标聚焦 / 失焦（focus / blur）、鼠标移动相关事件（mouseleave / mouseenter）、一些 UI 事件（如 scroll、resize 等）
- window.addEventListener('error') 可以绑定多个回调函数，按照绑定顺序依次执行

#### 页面崩溃收集和处理

- 可以监听 window 对象的 load 和 beforeunload 事件，并结合 sessionStorage 对网页崩溃实施监控

```javascript
window.addEventListener("load", () => {
  sessionStorage.setItem("good_exit", "pending");
});

window.addEventListener("beforeunload", () => {
  sessionStorage.setItem("good_exit", "true");
});

if (
  sessionStorage.getItem("good_exit") &&
  sessionStorage.getItem("good_exit") !== "true"
) {
  // 捕获到页面崩溃
}
```

#### 框架的错误处理

- React ^16 componentDidCatch
- Vue Vue.config.errorHandler

#### 数据上报

- 成熟的网站数据上报的域名往往与业务域名并不相同
  > 优势 1：单独域名，可以防止对主业务服务器的压力，能够避免日志相关处理逻辑和数据在主业务服务器的堆积
  >
  > 优势 2：多浏览器对同一个域名的请求量有并发数的限制，单独域名能够充分利用现代浏览器的并发设置

#### 独立域名的跨域问题

- “构造空的 Image 对象的方式”进行数据上报。原因是请求图片并不涉及跨域的问题

```js
let url = "xxx?data=" + JSON.stringify(data);
let img = new Image();
img.src = url;
```

#### 何时上报

- 页面加载性能数据可以在页面稳定后进行上报。
- 页面加载和重新刷新
- 页面切换路由
- 页面所在的 Tab 标签重新变得可见
- 页面关闭

#### 单页应用上报

- 如果切换路由是通过改变 hash 值来实现的，那么只需要监听 hashchange 事件
- 如果是通过 history API 来改变 URL，那么需要使用 pushState 和 replaceState 事件
- 当然一劳永逸的做法是进行 monkey patch，结合发布订阅模式，为相关事件的触发添加处理

```js
const patchMethod = (type) => () => {
  const result = history[type].apply(this, arguments);
  const event = new Event(type);
  event.arguments = arguments;
  window.dispatchEvent(event);
  return result;
};

history.pushState = patchMethod("pushState");
history.replaceState = patchMethod("replaceState");

window.addEventListener("replaceState", (e) => {
  // report...
});
window.addEventListener("pushState", (e) => {
  // report...
});
```

#### 何时以及如何上报

- 页面跳转，进入下一个页面，就难以保证异步数据的发送了
- 对页面跳转流畅程度和用户体验造成影响
- Google Analytics -> navigator.sendBeacon

```js
window.addEventListener("unload", logData, false);

const logData = () => {
  navigator.sendBeacon("/log", data);
};
```

- 它的行为是异步的，也就是说请求的发送不会阻塞向下一个页面的跳转，因此可以保证跳转的流畅度；
- 它在不受到极端“数据 size 和队列总数”的限制下，优先返回 true 以保证请求的发送成功。

#### 数据上报优化方面　

- 采用 HTTP 2.0 头部压缩，以减少数据传送大小；
- 采用 HTTP 2.0 多路复用技术，以充分利用链接资源

#### 实时性方面　

- 依赖后端服务，将超过阈值的情况进行邮件或短信发送
