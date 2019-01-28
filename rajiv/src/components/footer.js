import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px;
  background: #212529;
  text-align: right;
  -webkit-clip-path: polygon(0 48%, 100% 0, 100% 100%, 0% 100%);
  clip-path: polygon(0 48%, 100% 0, 100% 100%, 0% 100%);
`;

const Text = styled.div`
  color: white;
`;

const Footer = props => {
  return (
    <FooterBox>
      <Text>
        <i class="fas fa-heart" /> Rajiv Bhawan | IIT Roorkee
      </Text>
    </FooterBox>
  );
};
export default Footer;
