import React from "react";
import InputField from "./InputField";
export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      phone: "",
      fax: "",
      cell: "",
      owner_name: "",
      ownwer_phone: "",
      driver_name: "",
      driver_phone: "",
      truck_name: "",
      truck_phone: "",
      company_truckname: "",
      company_truckphone: "",
      company_chequename: "",
      company_chequephone: "",
      equipmentname: "",
      equipmentmake: "",
      Model: "",
      Year: "",
      License_plate: "",
      Color: "",
      UnitNo: "",
      Other: ""
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
        <div className="row">
          <div className="col-md-4">
            <InputField
              name="Name"
              takeinput={this.handleinputchange.bind(this, "name")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <InputField
              name="Adress"
              takeinput={this.handleinputchange.bind(this, "adress")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <InputField
              name="Phone"
              takeinput={this.handleinputchange.bind(this, "phone")}
            />
          </div>
          <div className="col-md-4">
            <InputField
              name="Fax"
              takeinput={this.handleinputchange.bind(this, "fax")}
            />
          </div>
          <div className="col-md-4">
            <InputField
              name="Cell"
              takeinput={this.handleinputchange.bind(this, "cell")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="OwnerName"
              takeinput={this.handleinputchange.bind(this, "owner_name")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="OwnerPhone"
              takeinput={this.handleinputchange.bind(this, "owner_phone")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="DriverName"
              takeinput={this.handleinputchange.bind(this, "driver_name")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="DriverPhone"
              takeinput={this.handleinputchange.bind(this, "driver_phone")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="Company Name(truck)"
              takeinput={this.handleinputchange.bind(this, "company_truckname")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Company Phone(truck)"
              takeinput={this.handleinputchange.bind(
                this,
                "company_truckphone"
              )}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="Company Name(cheque)"
              takeinput={this.handleinputchange.bind(
                this,
                "company_chequename"
              )}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Company Phone(cheque)"
              takeinput={this.handleinputchange.bind(
                this,
                "company_chequephone"
              )}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="Type of Equipment Name"
              takeinput={this.handleinputchange.bind(this, "equipmentname")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Type of Equipment Make"
              takeinput={this.handleinputchange.bind(this, "equipmentmake")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="Model"
              takeinput={this.handleinputchange.bind(this, "Model")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Year"
              takeinput={this.handleinputchange.bind(this, "Year")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="License Plate"
              takeinput={this.handleinputchange.bind(this, "License_plate")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Color"
              takeinput={this.handleinputchange.bind(this, "Color")}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <InputField
              name="Unit#"
              takeinput={this.handleinputchange.bind(this, "UnitNo")}
            />
          </div>
          <div className="col-md-6">
            <InputField
              name="Other"
              takeinput={this.handleinputchange.bind(this, "Other")}
            />
          </div>
        </div>
      </div>
    );
  }
}
