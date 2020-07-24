import React from "react";

export default class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.inputValue || ""
    };
  }
  handleChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  handleSave = () => {
    console.log("click save btn");
    this.props.saveClick(this.state.inputValue);
  };
  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
          />
          <button onClick={this.handleSave}>Save to storage</button>
        </div>
      </div>
    );
  }
}
