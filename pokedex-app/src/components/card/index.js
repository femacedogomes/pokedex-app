import React from 'react';
import '../../styles/card.css'

const PokemonCard = (props) => {
    const { pokemon } = props
    return (
        <div className='Card'>
            <div className='card-header'>
                <div className='pokemon-id'>#{pokemon.id}</div>
                <div className='pokemon-name'>{pokemon.name}</div>
                <div className='pokemon-type'>
                {pokemon.types.map((type, index) => {
                    return (
                        <div key={index}>
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            </div>

            <img src={pokemon.sprites.front_default} alt='Pokemon Image' className='pokemon-image'></img>
            
        </div>
    )
}

export default PokemonCard