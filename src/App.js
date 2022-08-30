import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title, ContainerHeader } from "./Elements/Header";
import Button from "./Elements/Button";
import LogOutBtn from "./Elements/LogOutBtn";

const App = () => {
  return (
    <>
    <Helmet>
    <title>Pokemones</title>
    </Helmet>
    <Header>
      <ContainerHeader>
        <Title>Pokemones</Title>
        <LogOutBtn />
      </ContainerHeader>
    </Header>
    </>
   
  );
}
 
export default App;