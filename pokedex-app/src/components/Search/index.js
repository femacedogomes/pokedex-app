import React, {useState} from 'react';
import {searchPokemon} from '../../components/api';
import '../../styles/Search.css'

const SearchBar = () => {
    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    }
    const onClickButton = () => {
        onSearchHandler(search)
    }

    return(
        <div className='searchbar'>
            <div>
                <input
                placeholder='Digite o nome do pokemon'
                onChange={(e)=>
                {setSearch(e.target.value)}}></input>
            </div>
            <div>
                <button
                className='searchbar-button'
                onClick={onClickButton}>
                    Buscar
                </button>
            </div>
            {pokemon ? (
                <div>
                    <div>Nome:{pokemon.name}</div>
                    <div>{pokemon.weight}</div>
                    <img src={pokemon.sprites.front_default}alt='Imagem Porkemon'></img>
                </div>
            ): null}
        </div>
    )   
}

export default SearchBar