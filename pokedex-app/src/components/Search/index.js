import React, {useState} from 'react';
import {searchPokemon} from '../../components/api';
import '../../styles/Search.css'

const SearchBar = (props) => {
    const [search, setSearch] = useState('dito')
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value === 0) {
            onSearch(undefined)
        }
    }
    const onClickButton = () => {
        onSearch(search)
    }

    return(
        <div className='searchbar'>
            <div>
                <input
                placeholder='Digite o nome do pokemon'
                onChange={onChangeHandler}></input>
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