import React from "react";
import InputField from "./InputField";
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
      workPhoneNumber: ""
    };
  }

  handleinputchange(name, value) {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  }
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/api/createCustomer", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <div className="container">
          <form>
            <br />
            <br />

            <div className="form-group row">
              <label htmlFor="Name" className="col-md-2 col-form-label">
                Company Name
              </label>
              <div className="col-md-10">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "companyName")}
                />
              </div>
            </div>
          <div className="form-group row">
            <label htmlFor="OwnerName" className="col-sm-2 col-form-label">
              Owner Name
            </label>
            <div className="col-sm-2">
              <InputField
                takeinput={this.handleinputchange.bind(
                  this,
                  "companyPointOfContact"
                )}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="CompanyID" className="col-sm-2 col-form-label">
              Company ID
            </label>
            <div className="col-sm-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "companyID")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Street Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "streetNumber")}
              />
            </div>
            <label htmlFor="address">Street Name</label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "streetName")}
              />
            </div>
            <label htmlFor="address">City</label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "city")}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="address" className="col-sm-2 col-form-label">
              Province
            </label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "province")}
              />
            </div>
            <label htmlFor="address">Zip code </label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "zipcode")}
              />
            </div>
            <div className="form-group row">
              <label htmlFor="CompanyID" className="col-sm-2 col-form-label">
                Company ID
              </label>
              <div className="col-sm-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "companyId")}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="address" className="col-sm-2 col-form-label">
                Street Number
              </label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "streetNumber")}
                />
              </div>
              <label htmlFor="address">Street Name</label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "streetName")}
                />
              </div>
              <label htmlFor="address">City</label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "city")}
                />
              </div>
            </div>
            <label htmlFor="phone">Cell Number</label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "cellPhoneNumber")}
              />
            </div>
            <label htmlFor="phone">Work phone</label>
            <div className="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "workPhoneNumber")}
              />
            </div>
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSubmit.bind(this)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
