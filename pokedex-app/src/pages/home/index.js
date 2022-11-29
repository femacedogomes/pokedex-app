import React, {useState, useEffect} from 'react'    
import PokemonCard from '../../components/card';
import SearchBar from '../../components/Search';
import Header from '../../components/header';
import Pokedex from '../../components/pokedex';
import {getPokemonData, getPokemons, searchPokemon} from '../../components/api'

function Home() {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    const itensPerPage = 25

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(itensPerPage, itensPerPage*page);
            const promises = data.results.map(async (pokemon)=>{
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            console.log(results)
            setPokemons(results)
            setLoading(false)
            setTotalPages(Math.ceil(data.count / itensPerPage))
        } catch (error) {
            console.log('fetchPokemons error:', error)
        }
    }
    useEffect(() => {
        console.log('carregou')
        fetchPokemons();
    },[page])

    const onSearchHandler = async (pokemon) => {
        if(!pokemon){
           return fetchPokemons()
        }
        const results = await searchPokemon(pokemon)
        setPokemons(results)
    }
    return (
        <div className='Container'>
                <Header/>
                <SearchBar
                onSearchHandler={onSearchHandler}
                />
                <Pokedex 
                pokemons={pokemons} 
                loading={loading} 
                page={page} 
                setPage={setPage}
                totalPages={totalPages}
                />
        </div>
    )
}

export default Home