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
  render() {
    return (
      <div>
        <form>
          <br />
          <br />
          <div class="form-group row">
            <label for="Name" class="col-sm-2 col-form-label">
              Company Name
            </label>
            <div class="col-sm-2">
              <div className="col-md-2">
                <InputField
                  takeinput={this.handleinputchange.bind(this, "companyname")}
                />
              </div>
            </div>
          </div>
          <div class="form-group row">
            <label for="OwnerName" class="col-sm-2 col-form-label">
              Owner Name
            </label>
            <div class="col-sm-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "owner_name")}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="CompanyID" class="col-sm-2 col-form-label">
              Company ID
            </label>
            <div class="col-sm-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "companyId")}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">
              Street Number
            </label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "streetNumber")}
              />
            </div>
            <label for="address">Street Name</label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "streetName")}
              />
            </div>
            <label for="address">City</label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "city")}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">
              Province
            </label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "province")}
              />
            </div>
            <label for="address">Zip code </label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "zipcode")}
              />
            </div>
            <label for="address">Country</label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "country")}
              />
            </div>
          </div>
          <div class="form-group row">
            <label for="phone" class="col-sm-2 col-form-label">
              Fax Number
            </label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "faxNumber")}
              />
            </div>
            <label for="phone">Cell Number</label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "cellNumber")}
              />
            </div>
            <label for="phone">Work phone</label>
            <div class="col-2">
              <InputField
                takeinput={this.handleinputchange.bind(this, "workPhone")}
              />
            </div>
          </div>
          <br />
          <br />
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
