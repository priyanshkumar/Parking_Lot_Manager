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
        <InputField
          name="Name"
          takeinput={this.handleinputchange.bind(this, "name")}
        />
        <InputField
          name="Adress"
          takeinput={this.handleinputchange.bind(this, "adress")}
        />
        <InputField
          name="Phone"
          takeinput={this.handleinputchange.bind(this, "phone")}
        />
        <InputField
          name="Fax"
          takeinput={this.handleinputchange.bind(this, "fax")}
        />
        <InputField
          name="Cell"
          takeinput={this.handleinputchange.bind(this, "cell")}
        />
        <InputField
          name="OwnerName"
          takeinput={this.handleinputchange.bind(this, "owner_name")}
        />
        <InputField
          name="OwnerPhone"
          takeinput={this.handleinputchange.bind(this, "owner_phone")}
        />
        <InputField
          name="DriverName"
          takeinput={this.handleinputchange.bind(this, "driver_name")}
        />
        <InputField
          name="DriverPhone"
          takeinput={this.handleinputchange.bind(this, "driver_phone")}
        />
        <InputField
          name="Company Name(truck)"
          takeinput={this.handleinputchange.bind(this, "company_truckname")}
        />
        <InputField
          name="Company Phone(truck)"
          takeinput={this.handleinputchange.bind(this, "company_truckphone")}
        />
        <InputField
          name="Company Name(cheque)"
          takeinput={this.handleinputchange.bind(this, "company_chequename")}
        />
        <InputField
          name="Company Phone(cheque)"
          takeinput={this.handleinputchange.bind(this, "company_chequephone")}
        />
        <InputField
          name="Type of Equipment Name"
          takeinput={this.handleinputchange.bind(this, "equipmentname")}
        />
        <InputField
          name="Type of Equipment Make"
          takeinput={this.handleinputchange.bind(this, "equipmentmake")}
        />
        <InputField
          name="Model"
          takeinput={this.handleinputchange.bind(this, "Model")}
        />
        <InputField
          name="Year"
          takeinput={this.handleinputchange.bind(this, "Year")}
        />
        <InputField
          name="License Plate"
          takeinput={this.handleinputchange.bind(this, "License_plate")}
        />
        <InputField
          name="Color"
          takeinput={this.handleinputchange.bind(this, "Color")}
        />
        <InputField
          name="Unit#"
          takeinput={this.handleinputchange.bind(this, "UnitNo")}
        />
        <InputField
          name="Other"
          takeinput={this.handleinputchange.bind(this, "Other")}
        />
      </div>
    );
  }
}
