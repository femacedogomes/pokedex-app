import React, {useState, useEffect} from 'react'    
import PokemonCard from '../../components/card';
import SearchBar from '../../components/Search';
import Header from '../../components/header';

function Home() {
    return (
        <div className='Container'>
                <Header/>
                <SearchBar/>
        </div>
    )
}

export default Home