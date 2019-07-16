import React from "react";
import InputField from "./InputField";
import "./Form.css";
import Terms from "../terms/Terms";

import axios from "axios";

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyPointOfContact: "",
      companyId: "",
      streetNumber: "",
      streetName: "",
      city: "",
      province: "",
      zipcode: "",
      country: "",
      faxNumber: "",
      cellPhoneNumber: "",
      workPhoneNumber: "",
      //added to check form submission
      checkSubmit: true,
      isChecked: false
    };
  }

  handleinputchange = (name, value) => {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  };

  handleSubmit = event => {
    // event.preventDefault();
    console.log();
    console.log(this.state);
    axios
      .post("http://localhost:3001/api/createProfile", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };

  agreementCheckbox = event => {
    //to check state of agreement checkbox
    //and adjust submit button

    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ isChecked: value });

    if (!this.state.isChecked) {
      this.setState({ checkSubmit: false });
    } else {
      this.setState({ checkSubmit: true });
    }
  };

  render() {
    return (
      <div className="formApplication container">
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
                  this.handleinputchange("companyName", value)
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
                takeinput={value =>
                  this.handleinputchange("companyPointOfContact", value)
                }
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
                takeinput={value => this.handleinputchange("companyID", value)}
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
                <option value="">Choose...</option>
                <option value="ON">Ontario</option>
                <option value="MB">Manitoba</option>
                <option value="QC">Quebec</option>
                <option value="AB">Alberta</option>
                <option value="BC">British columbia</option>
                <option value="NB">New Brunswick</option>
                <option value="NL">Newfoundland and Labrador</option>
                <option value="NS">Nova Scotia</option>
                <option value="SK">Saskatchewan</option>
                <option value="PE">Prince Edward Island</option>
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
                takeinput={value =>
                  this.handleinputchange("cellPhoneNumber", value)
                }
                type="number"
                required={true}
              />
            </div>
            <label htmlFor="work-no">Work phone</label>
            <div className="col-2">
              <InputField
                takeinput={value =>
                  this.handleinputchange("workPhoneNumber", value)
                }
                type="number"
              />
            </div>
          </div>
          <br />
          <br />
          <Terms />
          <input
            type="checkbox"
            name="isChecked"
            checked={this.state.isChecked}
            onChange={this.agreementCheckbox}
          />
          <label>I accept the terms and agreements</label>
          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
            value="Submit"
            disabled={this.state.checkSubmit}
          />
        </form>
      </div>
    );
  }
}
