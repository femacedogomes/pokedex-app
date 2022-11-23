import React, {useState, useEffect} from 'react';
import PokemonCard from '../card';


const Pokedex = (props) => {
    const {pokemons, loading} = props;

    return (
        <div>
            <h1>Pokedex</h1>
            <div>Paginação:</div>
            {loading ? <div>Carregando...</div> : <div>
                {pokemons && pokemons.map((pokemon, index)=>{
                    return(
                        <PokemonCard key={index} pokemon={pokemon}/>
                    )
                })}
                </div>
            }
        </div>  
    )
}

export default Pokedex