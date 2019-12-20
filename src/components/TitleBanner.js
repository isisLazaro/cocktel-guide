import React from "react";
import styled from "styled-components";

/* title component */
const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

/* wrapper component */
const Wrapper = styled.section`
  padding: 3em;
  background: papayawhip;
`;

const TitleBanner = props => (
  <Wrapper>
    <Title>{props.appTitle}</Title>
  </Wrapper>
);

export default TitleBanner;
