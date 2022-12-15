import React ,{useEffect} from 'react';
import '../../styles/card.css'

const PokemonCard = (props) => {
    const { pokemon } = props

    const changeStyleColor = (Type)=>{
        if((Type) === 'poison'){
        
        }
        return Type
    }    
    return (
        <div className='Card-border'>
            <div className='Card'>
            <img src={pokemon.sprites.other.dream_world.front_default} alt='Pokemon Image' className='pokemon-image'></img>
            <div className='card-header'>
                <div className='pokemon-id'>#{pokemon.id}</div>
                <div className='pokemon-name'>{pokemon.name}</div>
            </div>
            <div className='pokemon-types' id='PokemonType'>
                {pokemon.types.map((type, index) => {
                    
                    return (
                        <div key={index} className='pokemon-type' id='PokemonType'>
                            {changeStyleColor(type.type.name)}
                        </div>
                    )
                })}
            </div>
        </div>
        </div>   
    )
}

export default PokemonCard