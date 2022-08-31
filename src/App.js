import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Header, Title, ContainerHeader } from "./Elements/Header";
import LogOutBtn from "./Elements/LogOutBtn";
import {useFetch} from './Components/useFetch';
import { Cards } from "./Elements/Cards";
import Button from "./Elements/Button";
import { ReactComponent as IconLeftArrow } from './Images/left-arrow.svg';
import { ReactComponent as IconRightArrow } from './Images/right-arrow.svg';

const App = () => {

  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const state = useFetch(url);
  const { loading, data } = state;

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
      {
        loading
        ?
        <h1>Cargando</h1>
        :
        <div className="container text-center">
            {data.previous ? <Button iconoGrande as="button" onClick={() => setUrl(data.previous)}><IconLeftArrow/></Button> : ''}
            {data.next ? <Button iconoGrande as="button" onClick={() => setUrl(data.next)}><IconRightArrow /></Button> : ''}
            <Cards results={data.results} />
        </div>
      }
    </>
   
  );
}
 
export default App;