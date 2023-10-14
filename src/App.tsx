import React, { useState } from "react";
import styled from "styled-components";
import Dummy from "./Dommy";

const Container = styled.div`
  background-color: ${(prop) => prop.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(prop) => prop.theme.textColor};
`;

function App() {
  const [value, setValue] = useState("");
  const OnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Succes! : Value(${value})`);
  };
  return (
    <Container>
      <H1>Hello, Words!</H1>
      <form action="" onSubmit={onSubmit}>
        <input
          value={value}
          onChange={OnChange}
          type="text"
          placeholder="UserName"
        />
        <button>Log in</button>
      </form>

      <Dummy text={"hello"}></Dummy>
    </Container>
  );
}

export default App;
