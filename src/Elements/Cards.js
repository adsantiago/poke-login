import React from 'react'
import { CardPoke } from './CardPoke'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Cards = ({results}) => {


  return (
    <div className='container'>
        <ul className='cards'>
            {
                results.map(p => (
                    <li className='card-item' key={p.name} >
                        <Link className='a' to={`/Pokemon/${p.name}`}>
                            <CardPoke url={p.url} />
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
