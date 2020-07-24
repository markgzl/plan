import React from "react";
export default function withHoc(storageKey, storage) {
  return function(FormRegest) {
    return class PerComp extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          inputValue: storage.getItem(storageKey) || ""
        };
      }
      saveClick = value => {
        console.log(value);
        storage.setItem(storageKey, value);
      };
      render() {
        return (
          <FormRegest
            inputValue={this.state.inputValue}
            saveClick={this.saveClick}
            {...this.props}
          />
        );
      }
    };
  };
}
