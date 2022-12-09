import React, {useState, useEffect} from 'react';
import PokemonCard from '../card';
import '../../styles/home.css'
import Pagination from '../pagination';

const Pokedex = (props) => {
    const {pokemons, loading, page, setPage, totalPages} = props;
    const onLeftClickHandler = ()=>{
        if(page>0) {
            setPage(page-1)
        }
        console.log('volta')
    }
    const onRightClickHandler = ()=>{
        if(page+1 !== totalPages){
            setPage(page+1)
        }
        console.log('avança')
    }
    return (
        <div>
            <h1>Pokedex</h1>
            <div>
            <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
            />
            </div>
            {loading ? (
            <div>Carregando...</div>
            ) : (
            <div id='Pokemons'>
                {pokemons && pokemons.map((pokemon, index)=> {
                    return (
                        <PokemonCard key={index} pokemon={pokemon}/>
                    );
                })}
                </div>
            )}
        </div>  
    )
}

export default Pokedex