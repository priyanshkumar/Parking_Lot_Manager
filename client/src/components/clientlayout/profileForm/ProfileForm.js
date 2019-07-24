import React, { Fragment } from "react";
import InputField from "./InputField";
import "./Form.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";

export default class ProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      companyPointOfContact: "",
      companyID: "",
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

    this.reloadRefresh();
  }

  reloadRefresh = () => {
    axios.get("/api/getProfile").then(response => {
      if (response.data.redirecturl) {
        if (response.data) {
          this.setState({
            companyName: response.data.companyName,
            companyPointOfContact: response.data.companyPointOfContact,
            companyID: response.data.companyID,
            streetNumber: response.data.streetNumber,
            streetName: response.data.streetName,
            city: response.data.city,
            province: response.data.province,
            zipcode: response.data.zipcode,
            country: response.data.country,
            faxNumber: response.data.faxNumber,
            cellPhoneNumber: response.data.cellPhoneNumber,
            workPhoneNumber: response.data.workPhoneNumber
          });
        } else if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        }
      }
    });
  };

  handleinputchange = (name, value) => {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  };

  handleSubmit = () => {
    axios
      .post("/api/createProfile", this.state)
      .then(response => {
        console.log(response);
        if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        } else if (response.data.redirecturl === "dashboard") {
          this.props.history.push("/dashboard");
        } else {
          console.log("There is error checkout your terminal");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="profileForm container border rounded bg-secondary text-light mt-4 p-3">
          <div className="d-flex justify-content-center">
            <h3>Company Profile</h3>
          </div>
          <hr class="bg-light" />
          <form className="mt-5">
            <div className="form-group row">
              <label htmlFor="Name" className="col-sm-2 col-form-label">
                Company Name
              </label>
              <div className="col-sm-10">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("companyName", value)
                  }
                  value={this.state.companyName}
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
                  value={this.state.companyPointOfContact}
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
                  takeinput={value =>
                    this.handleinputchange("companyID", value)
                  }
                  type="number"
                  value={this.state.companyID}
                  required={true}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="street-no" className="col-2 col-form-label">
                Street Number
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("streetNumber", value)
                  }
                  value={this.state.streetNumber}
                  required={true}
                />
              </div>
              <label className="col-2" htmlFor="street-name">
                Street Name
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("streetName", value)
                  }
                  value={this.state.streetName}
                  required={true}
                />
              </div>
              <label className="col-2" htmlFor="city">
                City
              </label>
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
                  class="form-control w-100"
                  onChange={event =>
                    this.handleinputchange("province", event.target.value)
                  }
                >
                  <option value={this.state.province}>
                    {this.state.province ? this.state.province : "Choose..."}
                  </option>
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

              <label className="col-2" htmlFor="zip">
                Zip code
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value => this.handleinputchange("zipcode", value)}
                  value={this.state.zipcode}
                />
              </div>

              <label className="col-2" htmlFor="country">
                Country
              </label>
              <div className="col-2">
                <select
                  class="form-control w-100"
                  onChange={event =>
                    this.handleinputchange("country", event.target.value)
                  }
                >
                  <option value={this.state.country}>
                    {this.state.country ? this.state.country : "Choose..."}
                  </option>
                  <option value="USA">USA</option>
                  <option selected value="Canada">
                    Canada
                  </option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="fax" className="col-sm-2 col-form-label">
                Fax Number
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("faxNumber", value)
                  }
                  type="number"
                  value={this.state.faxNumber}
                />
              </div>
              <label className="col-2" htmlFor="cell">
                Cell Number
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("cellPhoneNumber", value)
                  }
                  type="number"
                  value={this.state.cellPhoneNumber}
                  required={true}
                />
              </div>
              <label className="col-2" htmlFor="work-no">
                Work phone
              </label>
              <div className="col-2">
                <InputField
                  takeinput={value =>
                    this.handleinputchange("workPhoneNumber", value)
                  }
                  value={this.state.workPhoneNumber}
                  type="number"
                />
              </div>
            </div>
            <button
              type="button"
              className="btn btn-danger btn-large btn-block w-25 mx-auto mt-4"
              onClick={this.handleSubmit}
            >
              Create Company Profile
            </button>
          </form>
        </div>
      </Fragment>
    );
  }
}
