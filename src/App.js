import React from "react";
import { Helmet } from "react-helmet";
import { Header, Title, ContainerHeader } from "./Elements/Header";
import Button from "./Elements/Button";

const App = () => {
  return (
    <>
    <Helmet>
    <title>Pokemones</title>
    </Helmet>
    <Header>
      <ContainerHeader>
        <Title>Pokemones</Title>
        <Button className="btn btn-success" to="/">X</Button>
      </ContainerHeader>
    </Header>
    </>
   
  );
}
 
export default App;