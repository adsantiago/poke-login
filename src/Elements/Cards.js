import React from 'react'
import { CardPoke } from './CardPoke'
import { useNavigate } from 'react-router-dom';


export const Cards = ({results}) => {

    const navigate = useNavigate();

  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map(p => (
                    <li className='card-item' key={p.name} >
                        <CardPoke url={p.url} navigate="/pokemon" />
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
