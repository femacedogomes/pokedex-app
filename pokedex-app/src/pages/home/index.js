import React, {useState, useEffect} from 'react'    
import SearchBar from '../../components/Search';
import Header from '../../components/header';
import Pokedex from '../../components/pokedex';
import {getPokemonData, getPokemons, searchPokemon} from '../../components/api'

function Home() {
    const [loading, setLoading] = useState(false);
    const [notFound, setNotFound] = useState(false)
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pokemons, setPokemons] = useState([]);
    
    const itensPerPage = 30
    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons(itensPerPage, itensPerPage*page);
            const promises = data.results.map(async (pokemon)=>{
                return await getPokemonData(pokemon.url)
            });

            const results = await Promise.all(promises)
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
        setLoading(true)
        setNotFound(false)
        const result = await searchPokemon(pokemon)
        console.log(result.sprites.other.dream_world.front_default)
        if(!result){
            setLoading(false)
            setNotFound(true)
        }else{
            setPokemons([result])
        }
        setLoading(false)
    }
    return (
        <div className='Container'>
                <Header/>
                <SearchBar
                onSearch={onSearchHandler}
                pokemons={pokemons} 
                loading={loading} 
                page={page} 
                setPage={setPage}
                totalPages={totalPages}
                />
                <Pokedex 
                pokemons={pokemons} 
                />
        </div>
    )
}

export default Home