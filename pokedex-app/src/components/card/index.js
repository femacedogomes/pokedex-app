import React,{useState,useEffect} from 'react';
import axios from 'axios';
import '../../styles/card.css'

function Card(){

    
    const getPokemon = function getPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0')
        .then(response=> {
            console.log(response.data)
        })
    }
    useEffect(
        getPokemon
    )
    return(
        <div className='Card'>
            <p>Pokemon name</p>
            <p>Pokemin id</p>
            <img alt='pokemon avatar'></img>
        </div>
    )
}

export default Card