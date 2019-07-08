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
  };
  handleSubmit = event => {
    // event.preventDefault();
    console.log(this.state);
  };
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
            <div className="col-sm-10">
              <InputField
                takeinput={value =>
                  this.handleinputchange("companyname", value)
                }
                required={true}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="OwnerName" className="col-sm-2 col-form-label">
              Owner Name
            </label>
            <div className="col-sm-10">
              <InputField
                takeinput={value => this.handleinputchange("owner_name", value)}
                required={true}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="CompanyID" className="col-sm-2 col-form-label">
              Company ID
            </label>
            <div className="col-sm-10">
              <InputField
                takeinput={value => this.handleinputchange("companyId", value)}
                type="number"
                required={true}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="street-no" className="col-sm-2 col-form-label">
              Street Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={value =>
                  this.handleinputchange("streetNumber", value)
                }
                required={true}
              />
            </div>
            <label htmlFor="street-name">Street Name</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("streetName", value)}
                required={true}
              />
            </div>
            <label htmlFor="city">City</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("city", value)}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="province" className="col-sm-2 col-form-label">
              Province
            </label>
            <div className="col-2">
              <select
                onChange={event =>
                  this.handleinputchange("province", event.target.value)
                }
              >
                <option>Choose...</option>
                <option>Ontario</option>
                <option>Manitoba</option>
                <option>Quebec</option>
                <option>Alberta</option>
                <option>British columbia</option>
                <option>New Brunswick</option>
                <option>Newfoundland and Labrador</option>
                <option>Nova Scotia</option>
                <option>Saskatchewan</option>
                <option>Prince Edward Island</option>
              </select>
            </div>

            <label htmlFor="zip">Zip code</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("zipcode", value)}
              />
            </div>

            <label htmlFor="country">Country</label>
            <div className="col-2">
              <select
                onChange={event =>
                  this.handleinputchange("country", event.target.value)
                }
              >
                <option>Canada</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="fax" className="col-sm-2 col-form-label">
              Fax Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("faxNumber", value)}
                type="number"
              />
            </div>
            <label htmlFor="cell">Cell Number</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("cellNumber", value)}
                type="number"
                required={true}
              />
            </div>
            <label htmlFor="work-no">Work phone</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("workPhone", value)}
                type="number"
              />
            </div>
          </div>
          <br />
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
            value="Submit"
          />
        </form>
      </div>
    );
  }
}
