import React from "react";
import InputField from "./InputField";
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
  handleinputchange(name, value) {
    var toSet = {};
    toSet[name] = value;
    this.setState(toSet);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
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
                  takeinput={this.handleinputchange.bind(this, "companyname")}
                />
              </div>
            </div>

            <div className="form-group row">
              <label htmlFor="OwnerName" className="col-sm-2 col-form-label">
                Owner Name
              </label>
              <div className="col-sm-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "owner_name")}
                />
              </div>
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
              <label htmlFor="address">Country</label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "country")}
                />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="phone" className="col-sm-2 col-form-label">
                Fax Number
              </label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "faxNumber")}
                />
              </div>
              <label htmlFor="phone">Cell Number</label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "cellNumber")}
                />
              </div>
              <label htmlFor="phone">Work phone</label>
              <div className="col-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "workPhone")}
                />
              </div>
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
