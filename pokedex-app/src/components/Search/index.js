import React, {useState} from 'react';
import {searchPokemon} from '../../components/api';
import '../../styles/Search.css'

const SearchBar = (props) => {
    const [search, setSearch] = useState('')
    const {onSearchHandler} = props

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

        </div>
    )   
}

export default SearchBar