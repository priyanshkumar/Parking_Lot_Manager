import React from "react";
import "./terms.css";

export default class Terms extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>Terms and Conditions</h2>
          <p>
            1. Tenant Agrees to pay $_____/month plus tax for _____parking
            space(s) at the above selectedproperty. The amount shall be due and
            payable in advance on the first day of each month. Uponsigning of
            this contract, you are providing payment for the first and last
            month. <br />
            2. In order to protect the parking rights of all tenants at this
            property the parking lot will be monitored and parking controls will
            be strictly enforced.
            <br /> 3. Any vehicle without a valid decal displayed in the
            designated location will be ticketed as beingillegally parked and
            may be towed away at owner's expense and risk.
            <br /> 4. Either party can terminate this rental of parking/storage
            space upon thirty (30) days written noticedelivered by ordinary mail
            or by fax at the address shown above. <br />
            5. Theft will not be tolerated. Tenants found removing items from
            other properties will be subject toprosecution. This activity will
            result in immediate termination of this contract and/or any
            otherprivileges. <br />
            6. Parking will be allowed in the designated area only. Management
            reserves the right to offeralternate parking within the property.{" "}
            <br />
            7. The charges are for use of parking spaces only. We have no
            liability to you or to any other personfor any loss, theft, fire,
            damage, injury or death caused by you, or to you, in the use of
            parking space.You shall indemnify and save us from harmless from and
            against any and all claims, demands,liabilities, losses, costs,
            damages and expenses which may be suffered or incurred by us arising
            fromany damage to or loss of property or injury or death of any
            person arising from your use of parkingspace. <br />
            8. Non payment for sixty (60) days will be handed over to
            collections for legal action.
            <br />
          </p>
          <p>
            9. This parking shall not be assigned by you without prior written
            consent of us.
            <br />
            10. You will not carry out any repairs to your vehicle, including
            any draining or filling of fluids for thevehicle on the property.
            You will not permit any deposit or dumping of any fluids on to the
            property.You will not suffer or permit the storage, discharge or
            disposal of any contaminant or waste,flammable, explosive,
            radioactive, corrosive or poisonous material or substance or
            pollution or anyother environmentally hazardous, dangerous or
            noxious substances or materials including but notlimited to those
            declared or determined by the standards established by relevant
            governmental status,by-laws, or regulations to be hazardous or
            toxic.
            <br />
            11. The contract is the entire agreement between you and us (Sandy-X
            Inc.) relating to your rental ofthe parking space and there are no
            collateral, implied, or express terms which are not stated in
            thiscontract.
            <br />
            12. You will remove your vehicle upon the termination of this
            contract within 24 hours.
            <br />
            13. Sub-Letting is not permitted. The activity will result in
            immediate termination of parking privileges.
            <br />
            14. Overnight layovers in the truck are not permitted without prior
            consent of management of Sandy-XInc.
            <br />
            15. All returned cheques/checks (N.S.F.) will result in an
            additional $50.00 surcharge and yourequipment will not move this
            premises until the total balance is cleared, and may result in
            atermination of this contract.
            <br />
            16. This parking contract shall be governed by the laws of the
            Province of Ontario
          </p>
        </div>
        <input
          type="submit"
          className="btn btn-primary"
          onClick={this.handleSubmit}
          value="Accept"
        />
      </div>
    );
  }
}
