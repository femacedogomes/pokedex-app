import React from 'react';
import '../../styles/card.css'

const PokemonCard = (props) => {
     const {pokemon} = props
    return (
        <div className='Card'>
        <div>{pokemon.name}</div>
        </div>
    )
}

export default PokemonCard