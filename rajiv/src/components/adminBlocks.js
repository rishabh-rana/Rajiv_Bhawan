import React from "react";
import styled, { css } from "styled-components";

const AdminBlockMain = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  filter: grayscale(40%);
`;

const Picture = styled.div`
  width: 100%;
  height: 400px;
`;

const Filter = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0.5;
`;

const Designation = styled.div`
  font-family: Righteous;
  font-size: 50px;
  margin-bottom: 180px;

  @media (max-width: 767px) {
    margin-bottom: 50px;
  }
`;

const OtherText = styled.div`
  font-size: 22px;
`;

const TextContainer = styled.div`
  @media (max-width: 767px) {
    padding-bottom: 20px;
  }
`;

const AdminBlock = props => {
  var image = "url(" + props.image + ")";

  return (
    <AdminBlockMain
      className="row p-0"
      style={{
        background: props.color
      }}
    >
      <div className="col-md-3 col-12 p-0 position-relative">
        <Filter
          style={{
            background: props.color
          }}
        />
        <Picture
          style={{
            background: image,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
        />
      </div>
      <div className="col-md-9 col-12 p-0">
        <TextContainer className="container pt-3" style={{ color: "white" }}>
          <Designation>{props.desig}</Designation>

          <OtherText className="pl-3">{props.name}</OtherText>
          <span className="pl-3 d-block mt-4">
            <i class="fas fa-phone" /> {props.phone}
          </span>
          <span className="pl-3 d-block">
            <i class="fas fa-at" /> {props.email}
          </span>
        </TextContainer>
      </div>
    </AdminBlockMain>
  );
};
export default AdminBlock;
