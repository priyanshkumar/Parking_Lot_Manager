import React from "react";
export default class InputField extends React.Component {
  OnEnter = event => {
    this.props.takeinput(event.target.value);
  };
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>
          <input
            type={this.props.type ? this.props.type : "text"}
            placeholder={" "}
            onChange={this.OnEnter}
            className="form-control"
            required={this.props.required}
          />
        </div>
      </div>
    );
  }
}
