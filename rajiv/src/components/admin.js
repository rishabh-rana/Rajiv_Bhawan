import React from "react";

import AdminBlock from "./adminBlocks";

const Admin = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pl-5 pt-5">
          <AdminBlock
            color="dodgerblue"
            image="https://secure.i.telegraph.co.uk/multimedia/archive/03543/Narutos_selfie_344_3543114b.jpg"
            desig="CHIEF WARDEN"
            name="Kiran A."
            phone="9889899898"
            email="bjbv@gmail.com"
          />
          <AdminBlock
            color="salmon"
            image="https://secure.i.telegraph.co.uk/multimedia/archive/03543/Narutos_selfie_344_3543114b.jpg"
            desig="SUPERVISOR"
            name="Amit K."
            phone="9889899898"
            email="bjbv@gmail.com"
          />

          <AdminBlock
            color="greenyellow"
            image="https://secure.i.telegraph.co.uk/multimedia/archive/03543/Narutos_selfie_344_3543114b.jpg"
            desig="MESS WARDEN"
            name="Ram Sateesh Pasupuleti"
            phone="9889899898"
            email="bjbv@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
export default Admin;
