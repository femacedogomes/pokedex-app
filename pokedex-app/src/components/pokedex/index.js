import React, {useState, useEffect} from 'react';
import PokemonCard from '../card';
import '../../styles/home.css'
import Pagination from '../pagination';

const Pokedex = (props) => {
    const {pokemons, loading} = props;

    return (
        <div>
            <h1>Pokedex</h1>
            <div><Pagination/></div>
            {loading ? <div>Carregando...</div> : <div id='Pokemons'>
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