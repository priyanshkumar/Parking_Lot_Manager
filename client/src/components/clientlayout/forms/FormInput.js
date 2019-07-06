import React from "react";
import InputField from "./InputField";
import "./Form.css";

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyname: "",
      owner_name: "",
      companyID: "",
      streetNumber: "",
      streetName: "",
      city: "",
      province: "",
      zipcode: "",
      country: "",
      faxNumber: "",
      cellNumber: "",
      workPhone: ""
    };
  }
  handleinputchange = (name, value) => {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }
  render() {
    return (
      <div className="formApplication">
        <form>
          <br />
          <br />
          <div className="form-group row">
            <label htmlFor="Name" className="col-sm-2 col-form-label">
              Company Name
            </label>
            <div className="col-sm-2">
                <InputField
                  takeinput={(value) => this.handleinputchange("companyname", value)}
                />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="OwnerName" className="col-sm-2 col-form-label">
              Owner Name
            </label>
            <div className="col-sm-2">
              <InputField
                takeinput={(value) => this.handleinputchange("owner_name", value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="CompanyID" className="col-sm-2 col-form-label">
              Company ID
            </label>
            <div className="col-sm-2">
              <InputField
                takeinput={(value) => this.handleinputchange("companyId", value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Street Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("streetNumber", value)}
              />
            </div>
            <label htmlFor="address">Street Name</label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("streetName", value)}
              />
            </div>
            <label htmlFor="address">City</label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("city", value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Province
            </label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("province", value)}
              />
            </div>
            <label htmlFor="address">Zip code </label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("zipcode", value)}
              />
            </div>
            <label htmlFor="address">Country</label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("country", value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="phone" className="col-sm-2 col-form-label">
              Fax Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("faxNumber", value)}
              />
            </div>
            <label htmlFor="phone">Cell Number</label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("cellNumber", value)}
              />
            </div>
            <label htmlFor="phone">Work phone</label>
            <div className="col-2">
              <InputField
                takeinput={(value) => this.handleinputchange("workPhone", value)}
              />
            </div>
          </div>
          <br />
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
