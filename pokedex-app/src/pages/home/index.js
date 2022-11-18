import React, {useState, useEffect} from 'react'
import axios from 'axios';
import PokemonCard from '../../components/card';


function Home() {

    const [pokemons, setPokemons] = useState([''])

    const getPokemons = function getPokemons() {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=50')
            //.then((res) => setPokemons(res.data.results))
            .then((res) => console.log(res.data.results))
            .catch(err => console.log(err))
    }
    useEffect(
        getPokemons
    );

    return (
        <div className='Container'> 
                <div className='Container'>
                </div>
        </div>
    )
}

export default Home