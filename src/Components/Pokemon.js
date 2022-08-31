import React from 'react'
import { Helmet } from 'react-helmet';
import BackBtn from '../Elements/BackBtn';
import { Header, Title, ContainerHeader } from '../Elements/Header';

const Pokemon = () => {

    return (
        <>
            <Helmet>
                <title>Pokemones</title>
            </Helmet>

            <Header>
                <ContainerHeader>
                    <Title>Pokemones</Title>
                    <BackBtn></BackBtn>
                </ContainerHeader>  
            </Header>
            
        </>
        
    );
}
 
export default Pokemon;