import React from 'react';
import '../../styles/card.css'

function PokemonCard(name) {

    return (
        <div className='Card'>
            {name}
        </div>
    )
}

export default PokemonCard