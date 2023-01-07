import React from "react";
import styled from "styled-components";

const MainSection = ({ children }) => {
  return <Section>{children}</Section>;
};

export default MainSection;

const Section = styled.div`
  margin: 0 auto;
  padding: 1em 0;
  width: clamp(70%, 1140px, 90%);
  @media only screen and (max-width: 1400px) {
    width: unset;
    margin: 0 4em;
  }
  @media only screen and (max-width: 1200px) {
    margin: 0 2em;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 1em;
  }
`;
