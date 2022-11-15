import React,{useState,useEffect} from 'react';
import '../../styles/card.css'

function Card(){

    const [pokemon, setPokemon] = useState({ name: '', avatar: '', id:'' })

    const getPokemon = function getPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon/25')
        .then((res)=> setPokemon(res.data.results))
        .then(data => {
            setPokemon({
                name: data.name,
                avatar: data.sprites.front_default,
                id: data.id
            })
        })
    }
    useEffect(
        getPokemon
    )
    return(
        <div className='Card'>
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            <img src={pokemon.avatar}></img>
        </div>
    )
}

export default Card