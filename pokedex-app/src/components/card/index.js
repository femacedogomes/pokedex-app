import React,{useState,useEffect} from 'react';
import '../../styles/card.css'

function Card(){

    const [pokemon, setPokemon] = useState({ name: '', avatar: '', id:'' })

    const getPokemon = function getPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon/25`
        fetch(url)
        .then(response => response.json())
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