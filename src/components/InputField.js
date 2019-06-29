import React from "react";
export default class InputField extends React.Component {
  OnEnter(event) {
    this.props.takeinput(event.target.value);
  }
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <input
            type="text"
            placeholder={this.props.name}
            onChange={this.OnEnter.bind(this)}
          />
        </div>
      </div>
    );
  }
}
