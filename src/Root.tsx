import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  background-color: ${(prop) => prop.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(prop) => prop.theme.textColor};
`;

function Root() {
  return (
    <Container>
      <Header />
      <H1>Hello, Words!</H1>
      <Outlet />
    </Container>
  );
}

export default Root;
