### React 应用中 数据应该谁来维护

#### 快速变更型
- 页面 state 更合适
  
#### 中等持续型
- redux store
- 祖孙组件属性传递超过 2 层 使用 redux 更好
- 多页面共同消费的数据
#### 长远稳定型 
- 数据库或者 localstorage