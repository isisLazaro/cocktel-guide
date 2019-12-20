import React from "react";
import styled from "styled-components";

/* title component */
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

/* wrapper component */
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const TitleBanner = () => (
  <Wrapper>
    <Title>TITULO APP</Title>
  </Wrapper>
);

export default TitleBanner;
