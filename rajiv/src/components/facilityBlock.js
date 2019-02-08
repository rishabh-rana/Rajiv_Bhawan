import React from 'react';
import styled, { css } from "styled-components";


const FacilityBlockMain = styled.div`
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  filter: grayscale(40%);
`;

const Picture = styled.div`
  width: 100%;
  height: 400px;
  opacity: 0.7;
`;

const FacilityName = styled.div`
  font-family: Righteous;
  font-size: 50px;
  margin-bottom: 50px;

  @media (max-width: 767px) {
    margin-bottom: 50px;
  }	

`;

const FacilityContent = styled.div`
	font-size: 22px;
`;

const TextContainer = styled.div`
  @media (max-width: 767px) {
      padding-top: 20px;
      }
`;

const FacilityBlock = props => {
	var image = "url(" + props.picture + ")";

	return(
	  <FacilityBlockMain className="row p-0"
        style={{
          background: props.color
        }} >
		<div className="col-md-3 col-12 p-0 position-relative">
        	<Picture
	          style={{
	            background: image,
	            backgroundSize: "cover",
	            backgroundRepeat: "no-repeat",
	            backgroundPosition: "center"
	          }}
	        />
	    </div>
	    <div className="col-md-9 col-12 p-0 position-relative">
	    <TextContainer className="container" style={{ color: "white" }}>
	   		<FacilityName>{props.name}</FacilityName>	
	      	<FacilityContent>{props.content}</FacilityContent>
	    </TextContainer>
	    </div>
      </FacilityBlockMain>
      );
};

export default FacilityBlock;