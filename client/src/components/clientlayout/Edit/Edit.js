import React from "react";
import InputField from "../forms/InputField";
import axios from "axios";

export default class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: props.customerData.companyName || "",
      companyPointOfContact: props.customerData.companyPointOfContact || "",
      companyID: props.customerData.companyID || "",
      streetNumber: props.customerData.streetNumber || "",
      streetName: props.customerData.streetName || "",
      city: props.customerData.city || "",
      province: props.customerData.province || "",
      zipcode: props.customerData.zipcode || "",
      country: props.customerData.country || "",
      faxNumber: props.customerData.faxNumber || "",
      cellPhoneNumber: props.customerData.cellPhoneNumber || "",
      workPhoneNumber: props.customerData.workPhoneNumber || ""
    };
  }
  handleinputchange = (name, value) => {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  };
  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    axios
      .put("/api/updateProfile/" + this.props.userId, this.state)
      .then(response => {
        console.log(response);
        this.props.onFinishEditing();
      })
      .catch(err => {
        console.log(err);
      });
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
                  this.handleinputchange("companyName", value)
                }
                required={true}
                value={this.state.companyName}
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
                value={this.state.companyPointOfContact}
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
                value={this.state.streetNumber}
              />
            </div>
            <label htmlFor="street-name">Street Name</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("streetName", value)}
                required={true}
                value={this.state.streetName}
              />
            </div>
            <label htmlFor="city">City</label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("city", value)}
                value={this.state.city}
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
                <option value={this.state.province}>Choose...</option>
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
                <option value={this.state.country}>Canada</option>
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
                value={this.state.faxNumber}
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
                value={this.state.cellPhoneNumber}
              />
            </div>
            <label htmlFor="work-no">Work phone</label>
            <div className="col-2">
              <InputField
                takeinput={value =>
                  this.handleinputchange("workPhoneNumber", value)
                }
                type="number"
                value={this.state.workPhoneNumber}
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
