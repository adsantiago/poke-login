import React, { useState } from 'react'
import { Helmet } from 'react-helmet';
import BackBtn from '../Elements/BackBtn';
import { Header, Title, ContainerHeader } from '../Elements/Header';
import { useParams } from 'react-router-dom';
import { useFetch } from './useFetch';

const Pokemon = () => {

    const { name } = useParams()

    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const state = useFetch(url);
    const { loading, data } = state;

    return (
        <>
            <Helmet>
                <title>Pokemon</title>
            </Helmet>

            <Header>
                <ContainerHeader>
                    <Title>Pokemon</Title>
                    <BackBtn></BackBtn>
                </ContainerHeader>
            </Header>
            <div>
                {
                    loading
                        ?
                        <h1>Cargando</h1>
                        :
                        <div className='text-center'>
                            <div className='card-header'>
                                <h5 className={`card-header text-capitalize ${data.types[0].type.name}`}>
                                    <strong>
                                        {data.name}
                                    </strong>
                                </h5>
                            </div>
                            <div className='card-body'>
                                <img src={data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.other.home.front_default} alt="pokemon" width="250" height="250" />
                            </div>
                            <div className='card-footer'>
                                <ul>
                                    <li className='abilities'>
                                        <strong>
                                            Habilidades
                                        </strong> 
                                        </li>
                                    {data.abilities.map(ability =>
                                        <li className='card-footer' key={ability.ability.name}>
                                            {ability.ability.name}
                                        </li>)}
                                </ul>
                            </div>
                        </div>
                }
            </div>

        </>

    );
}

export default Pokemon;