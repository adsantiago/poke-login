import React from 'react'
import { Helmet } from 'react-helmet';
import BackBtn from '../Elements/BackBtn';
import { Header, Title } from '../Elements/Header';

const Pokemon = () => {

    return (
        <>
            <Helmet>
                <title>Pokemones</title>
            </Helmet>
            <Header>
                <Title>Pokemones</Title>
                <BackBtn></BackBtn>
            </Header>
            
        </>
        
    );
}
 
export default Pokemon;