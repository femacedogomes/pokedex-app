import React from 'react';

export const searchPokemon = async (pokemon) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
        const response = await fetch(url)
        return await response.json()     
    } catch (error) {
        console.log("error: ",error)
    }
}

export const getPokemons = async () => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error',error)
    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
        console.log('error',error)
    }
}