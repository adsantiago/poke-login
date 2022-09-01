import React from 'react'
import { useFetch } from '../Components/useFetch'

export const CardPoke = ({url}) => {

    const state = useFetch(url)
    const {loading, data} = state;

    
  return (
    <div>
        {
            loading
            ?
            <h1>Cargando</h1>
            :
            <div className='card'>
                    <div className={`card-header ${data.types[0].type.name}`}>
                    <h5 className='card-title'>{data.id}</h5>
                </div>
                <div className='card-body'>
                    <img src={data.sprites.other.dream_world.front_default ? data.sprites.other.dream_world.front_default : data.sprites.other.home.front_default} alt="pokemon" width="100" height="100" />
                </div>
                <div className='card-footer'>
                    <p className='card-text text-capitalize'>{data.name}</p>
                </div>
            </div>
        }
    </div>
  )
}

