### BFC（Block Formatting Context)

#### 概念
- 块级格式化上下文，页面中的一块渲染区域，该区域有一套渲染规则，决定子元素如何布局以及和其他元素的关系
- 它由内向外包含了 content， padding， border， margin

#### 分类
- 标准盒模型
> 元素的宽度： content
> 
> 盒子的宽度： margin-left + border-left + padding-left + width + padding-right + border-right + margin-right
- IE 盒模型
> 元素的宽度： border-left + padding-left + width  + padding-right + border-right
> 
> 盒子的宽度：margin-left + width + margin-right

#### 特点
- 同一个 BFC内 相邻的两个 box 会触发垂直方向上的 margin 合并
- 同一个 BFC内 相邻的两个元素水平方向的 margin 不会合并
- 计算 BFC元素的高度时，浮动元素的高度也计算在内
- BFC 是独立容器 不受外面元素影响，反之亦然
- BFC 不与旁边的 float box 区域重叠

#### js 获取盒模型的宽高
- ele.style.width/height (只能获取到行内样式)
- window.getComputedStyle(ele).width/height (通用)
- ele.currentStyle.width/height (IE 独有)
- ele.getBoundingClientRect().width/height (获取一个元素的绝对位置)
  

#### 如何生成一个 BFC
- overflow 除了 visible 以外的值 (hidden、auto、scroll)；
- 浮动元素： float 除 none 以外的值；
- 绝对定位元素： ：position (absolute、fixed)；
- display 为 inline-block、table-cells、flex。


#### BFC 常用来解决什么问题？
- margin 合并
- 高度塌陷
- 两栏布局