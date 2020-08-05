## 正则
### 正则表达式是匹配模式，要么匹配字符，要么匹配位置

### 一、正则表达式匹配字符
#### 1 匹配模式
- 横向模糊匹配
> /ab{2,5}c/ 第一个是 a, 第 2-5 个是 b, 最后 c
> 
> 'abc abbc abbbc abbbbbbc' // abbc abbbc
> 
- 纵向模糊匹配 
> /[abc]/ abc 任意一个


#### 2 字符组
- 范围表示法 [a-z] / [-az]
- 排除字符组 [^abc] 配除了 "a", "b", "c" 的任意一个字符。

| 字符组 | 含义 |
| --- | --- |
| \d | [0-9] 一位数字|
| \D | [^0-9] 除数字之外的 |
| \w | [0-9a-zA-Z_] 数字，字母，下划线 |
| \W | [^0-9a-zA-Z_] 非单词字符 |
| \s | [\t\v\n\r\f] 空白符，包含空格、水平制表符、垂直制表符、换行符、回车符、换页符 |
| \S | [^\t\v\n\f\r] 非空白符 |
| . | [^\n\r\u2028\u2029] 通配符，表示几乎任意字符。换行符、回车符、行分隔符和段分隔符除外 |
| 任意字符 | [\D\d] [\W\w] [\S\s] [^] |

#### 3 量词
| 量词 | 含义  |
| --- | --- |
| {m,} | 至少出现 m次 |
| {m} | {m,m} 出现 m次 |
| ? | {0,1}出现或者不出现 |
| + | {1, } 至少出现 1 次 |
| * | {0, } 可能出现任意次 |
- 贪婪匹配 尽可能多的匹配 
```js
let reg = /\d{2,4}/g  // 如果有会尽可能多的匹配 超过 4 个只匹配 4 个 ，如有 3 个就匹配 3 个
reg.match('123 1234 12345') // ['123', '1234', '12345']

```
- 惰性匹配
```js
let reg = /\d{2,4}?/g  // 如果有 尽可能少 匹配，如超过 2 个，就只匹配 2 个
reg.match('123 1234 12345') // ['12', '12', '34', '12','34']

```

#### 4 多选分支
- 使用 | (管道符) 分割
- 分支结构也是惰性， 匹配到一个就不会匹配后续的
- 格式 (r1|r2|r3)
```js
let r = /guo|zl/g
let str = 'guozl zl guo'
str.match(r) // ["guo", "zl", "zl", "guo"]
// 惰性的表现
let r1 = /guo|guoo/g
let r2 = /guoo|guo/g
let str = 'guoo'
str.match(r1) // ['guo']
str.match(r2) // ['guoo']
```
- 例 1 16进制的色值匹配
```js
let colorReg = /^#([a-fA-F\d]{3}|[a-fA-F\d]{6})$/
colorReg.test('#f00') // true
colorReg.test('#666666') // true
```
- 例 2 时间匹配 01:09, 14:30
```js
let timerReg = /^([01]\d)|(2[0-3])\:[0-5]\d$/g
timerReg.test("23:25"); // true
timerReg.test("03:05"); // true
```
- 例 3 时间匹配 1:9, 20:50, 01:04
```js
let timerReg = /^(0?[1-9]|1[0-9]|2[0-3])\:(0?[1-5][0-9])$/
timerReg.test("23:25"); // true
timerReg.test("03:05"); // true
timerReg.test("3:5");   // true
```
- 例 4 yyyy-mm-dd
```js
let dateReg = /^[1-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/
```
- 例 5 匹配 class
```js
let classReg = /class="[^"]*"/
let el = '<div id="leo" class="good" name="123"></id>'
el.match(classReg) //  class="good"
```