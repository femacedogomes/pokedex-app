import React, {useState} from 'react';
import {searchPokemon} from '../../components/api';
import '../../styles/Search.css'
import Pagination from '../pagination';

const SearchBar = (props) => {
    const [search, setSearch] = useState('dito')
    const {onSearch, pokemons, loading, page, setPage, totalPages} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value === 0) {
            onSearch(undefined)
        }
    }
    const onClickButton = () => {
        onSearch(search)
    }
    const onLeftClickHandler = ()=>{
        if(page>0) {
            setPage(page-1)
        }
        console.log('volta')
    }
    const onRightClickHandler = ()=>{
        if(page+1 !== totalPages){
            setPage(page+1)
        }
        console.log('avança')
    }

    return(
        
        <div className='search-pages'>
            <div className='searchbar'>
            <div>
                <input
                placeholder='Digite o nome ou id do pokemon'
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
        <div className='pagination-div'>
        <Pagination
            page={page+1}
            totalPages={totalPages}
            onLeftClick={onLeftClickHandler}
            onRightClick={onRightClickHandler}
        />
        </div>
        </div>
    )   
}

export default SearchBar