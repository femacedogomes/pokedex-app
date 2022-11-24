import React, {useState, useEffect} from 'react'    
import PokemonCard from '../../components/card';
import SearchBar from '../../components/Search';
import Header from '../../components/header';
import Pokedex from '../../components/pokedex';
import {getPokemonData, getPokemons} from '../../components/api'

function Home() {
    const [loading, setLoading] = useState(false);
    const [pokemons, setPokemons] = useState([]);

    const fetchPokemons = async () => {
        try {
            setLoading(true);
            const data = await getPokemons();
            const promises = data.results.map(async (pokemon)=>{
                return await getPokemonData(pokemon.url)
            })
            const results = await Promise.all(promises)
            console.log(results)
            setPokemons(results)
            setLoading(false)
        } catch (error) {
            console.log('fetchPokemons error:', error)
        }
    }
    useEffect(() => {
        console.log('carregou')
        fetchPokemons();
    },[])

    return (
        <div className='Container'>
                <Header/>
                <SearchBar/>
                <Pokedex pokemons={pokemons} loading={loading}/>
        </div>
    )
}

export default Home