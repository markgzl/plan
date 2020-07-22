### 响应式布局

- float 布局
- 相对单位

> 1. em
	>  对于 font-size 来说相对于父级字体大小
	> 对于 line-height 来说相对于自身的字体大小
> 2. rem 相对于根节点 html 的字体大小
> 3. vh & wh, vmin & vmax
> 4. %
> 5. calc()
- 媒体查询
- flex
- grid
- 借助 js


#### 基本概念
- 屏幕分辨率
- 像素
- PPI (每英寸包含的像素数)
- DPI (每英寸包含的点数)
- 设备独立像素
- 设备像素比
- Meta Viewpoint
 
 ``` html
 <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover">
// 禁用了用户缩放功能，使页面宽度和设备宽度对齐
 ```

 #### 淘宝实现的响应式
- resize 时计算窗口宽度，重新设置 root 的 fontSize 
- flex + rem

#### Bootstrap 实现的响应式布局
- flex
- 宽度百分比
- 媒体查询


#### 横屏
```javascript
window.addEventListener('resize', () => {
	if(window.orientaion === 180 || window.orientation===0){
		console.log('竖屏')
	}
	if(window.orientaion === 90 || window.orientation===-90){
		console.log('横屏')
	}
})
```

```css
@media screen and (orientation: portrait){
/*竖屏样式代码*/
}
@media screen and (orientation: landscape){
  /*横屏样式代码.*/
}
```


#### %相对于谁
- position: absolute 相对于祖先元素第一个非 static 的元素
- position: relative 相对于自身
- position: fixed 浏览器窗口
- margin 与 padding <strong style="color: red">相对于父元素的宽度</strong>
- border-radius: 相对于自身
- background-size相对于自身
- text-indent: 相对于父元素的宽度
- font-size: 相对于父元素的 font-size
- line-height: 相对于该元素的 font-size