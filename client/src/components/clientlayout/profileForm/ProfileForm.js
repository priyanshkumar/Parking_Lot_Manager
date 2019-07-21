import React from "react";
import InputField from "./InputField";
import "./Form.css";
import axios from "axios";

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

  handleSubmit = () => {
    console.log(this.state);
    axios
      .post("/api/createProfile", this.state)
      .then(response => {
        if (response.data.redirecturl === "login") {
          this.props.history.push("/login");
        } else if (response.data.redirecturl === "dashboard") {
          this.props.history.push("/dashboard");
        } else {
          console.log(response);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="profileForm container p-5">
        <div className="d-flex justify-content-center">
          <h3>Company Profile</h3>
        </div>
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
            <label htmlFor="street-no" className="col-2 col-form-label">
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
            <label className="col-2" htmlFor="street-name">
              Street Name
            </label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("streetName", value)}
                required={true}
              />
            </div>
            <label className="col-2" htmlFor="city">
              City
            </label>
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

            <label className="col-2" htmlFor="zip">
              Zip code
            </label>
            <div className="col-2">
              <InputField
                takeinput={value => this.handleinputchange("zipcode", value)}
              />
            </div>

            <label className="col-2" htmlFor="country">
              Country
            </label>
            <div className="col-2">
              <select
                onChange={event =>
                  this.handleinputchange("country", event.target.value)
                }
              >
                <option value="">Choose...</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
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
            <label className="col-2" htmlFor="cell">
              Cell Number
            </label>
            <div className="col-2">
              <InputField
                takeinput={value =>
                  this.handleinputchange("cellPhoneNumber", value)
                }
                type="number"
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
                type="number"
              />
            </div>
          </div>
          <button
            type="button"
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
