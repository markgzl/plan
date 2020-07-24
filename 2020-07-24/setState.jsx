import React from "react";

// setState Promise 化
const setStatePromise = (self, state) => {
  return new Promise(resolve=>{
    self.setState(state, ()=>resolve())
  })
}

export default class App extends React.Component {

  state = {
    count: 0
  }
  onClick2 = async () => {
    await setStatePromise(this, {
      count: this.state.count+1
    })
    console.log(this.state.count)
  }

  onClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    console.log(this.state.count)
	}
	// 在 React 控制之外的情况， setState 会同步更新 this.state。
  componentDidMount() {
    document.querySelector('#btn').addEventListener('click', this.onClick)
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button id="btn">测试同步按钮 {this.state.count}</button>
        <br />
        <button id="btn2" onClick={this.onClick}>测试 setState 按钮 {this.state.count}</button>
        <br />
        <button id="btn2" onClick={this.onClick2}>测试setStatePromise 按钮 {this.state.count}</button>
      </div>
    );
  }
}
