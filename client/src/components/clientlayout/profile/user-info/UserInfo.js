import React from "react";

function UserInfo({ customerData }) {
  return (
    <table className="table table-striped">
      <tbody>
        <tr>
          <th>Company Name</th>
          <td>{customerData.companyName}</td>
        </tr>
        <tr>
          <th>Manager Name</th>
          <td>{customerData.companyPointOfContact}</td>
        </tr>
        <tr>
          <th>Company ID</th>
          <td>{customerData.companyID}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            {customerData.streetNumber},{customerData.streetName}
          </td>
        </tr>
        <tr>
          <th>City, ZipCode</th>
          <td>
            {customerData.city},{customerData.zipcode}
          </td>
        </tr>
        <tr>
          <th>Province, Country</th>
          <td>
            {customerData.province},{customerData.country}
          </td>
        </tr>
        <tr>
          <th>Fax Number</th>
          <td>{customerData.faxNumber}</td>
        </tr>
        <tr>
          <th>Cell Phone Number</th>
          <td>{customerData.cellPhoneNumber}</td>
        </tr>
        <tr>
          <th>Work Phone Number</th>
          <td>{customerData.workPhoneNumber}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default UserInfo;
