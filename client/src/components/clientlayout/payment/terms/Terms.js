import React from "react";
import "./terms.css";
//import axios from "axios";

export default class Terms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    };
  }

  render() {
    return (
      <div>
        <h2>Terms and Conditions</h2>
        <ol>
          <li>
            Tenant Agrees to pay ${this.props.price} /month plus tax for $
            {this.props.spot} parking space(s) at the above selected property.
            The amount shall be due and payable in advance on the first day of
            each month. Upon signing of this contract, you are providing payment
            for the first and last month.{" "}
          </li>
          <li>
            In order to protect the parking rights of all tenants at this
            property the parking lot will be monitored and parking controls will
            be strictly enforced.
          </li>
          <li>
            Any vehicle without a valid decal displayed in the designated
            location will be ticketed as being illegally parked and may be towed
            away at owner's expense and risk.
          </li>
          <li>
            Either party can terminate this rental of parking/storage space upon
            thirty (30) days written notice delivered by ordinary mail or by fax
            at the address shown above.{" "}
          </li>
          <li>
            Theft will not be tolerated. Tenants found removing items from other
            properties will be subject to prosecution. This activity will result
            in immediate termination of this contract and/or any other
            privileges.{" "}
          </li>
          <li>
            Parking will be allowed in the designated area only. Management
            reserves the right to offer alternate parking within the property.
          </li>
          <li>
            The charges are for use of parking spaces only. We have no liability
            to you or to any other person for any loss, theft, fire, damage,
            injury or death caused by you, or to you, in the use of parking
            space. You shall indemnify and save us from harmless from and
            against any and all claims, demands, liabilities, losses, costs,
            damages and expenses which may be suffered or incurred by us arising
            from any damage to or loss of property or injury or death of any
            person arising from your use of parking space.{" "}
          </li>
          <li>
            Non payment for sixty (60) days will be handed over to collections
            for legal action.
          </li>
          <li>
            This parking shall not be assigned by you without prior written
            consent of us.
          </li>
          <li>
            You will not carry out any repairs to your vehicle, including any
            draining or filling of fluids for the vehicle on the property. You
            will not permit any deposit or dumping of any fluids on to the
            property. You will not suffer or permit the storage, discharge or
            disposal of any contaminant or waste, flammable, explosive,
            radioactive, corrosive or poisonous material or substance or
            pollution or any other environmentally hazardous, dangerous or
            noxious substances or materials including but not limited to those
            declared or determined by the standards established by relevant
            governmental status, by-laws, or regulations to be hazardous or
            toxic.
          </li>
          <li>
            The contract is the entire agreement between you and us (Company
            Name) relating to your rental of the parking space and there are no
            collateral, implied, or express terms which are not stated in this
            contract.
          </li>
          <li>
            You will remove your vehicle upon the termination of this contract
            within 24 hours.
          </li>
          <li>
            Sub-Letting is not permitted. The activity will result in immediate
            termination of parking privileges.
          </li>
          <li>
            Overnight layovers in the truck are not permitted without prior
            consent of management.
          </li>
          <li>
            All returned cheques/checks (N.S.F.) will result in an additional
            $50.00 surcharge and your equipment will not move this premises
            until the total balance is cleared, and may result in a termination
            of this contract.
          </li>
          <li>
            This parking contract shall be governed by the laws of the Province
            of Ontario
          </li>
        </ol>
      </div>
    );
  }
}
