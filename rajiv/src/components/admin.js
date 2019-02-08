import React from "react";

import AdminBlock from "./adminBlocks";

const Admin = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 pl-5 pt-5">
          <AdminBlock
            color="dodgerblue"
            image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
            desig="CHIEF WARDEN"
            name="Kiran A."
            phone="7895710633"
            email="bjbv@gmail.com"
          />
          <AdminBlock
            color="salmon"
            image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
            desig="SUPERVISOR"
            name="Amit K."
            phone="8909813318"
            email="bjbv@gmail.com"
          />

          <AdminBlock
            color="greenyellow"
            image="https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"
            desig="MESS WARDEN"
            name="Ram Sateesh Pasupuleti"
            phone="8085280264"
            email="bjbv@gmail.com"
          />
        </div>
      </div>
    </div>
  );
};
export default Admin;
