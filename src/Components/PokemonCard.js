import React, { useState } from 'react';
import Description from './Description';

const PokemonCard = ({id,name,image,type,height,weight,stat1,stat2,stat3,stat4,stat5,stat6,basestat1,basestat2,basestat3,
    basestat4,basestat5,basestat6}) => {
    const [show,setShow] = useState(false)
    return (
        <div className ={`pokemon_card ${type}`}>
            <div className="number">
                <small>#{id}</small>
            </div>
            <img src={image} alt={name} />
            <>
                <h2>{name.toUpperCase() }</h2>
                <small>Type : {type}</small>
                <button className="stats_btn" onClick={() => setShow(!show)}>{show===true?"KNOW LESS...":"KNOW MORE..."}</button>
                {show===true?<Description 
                weightpokemon={weight} 
                heightpokemon={height} 
                pokemonstat1={stat1}
                pokemonstat2={stat2}
                pokemonstat3={stat3}
                pokemonstat4={stat4}
                pokemonstat5={stat5}
                pokemonstat6={stat6}
                posbs1={basestat1}
                posbs2={basestat2}
                posbs3={basestat3}
                posbs4={basestat4}
                posbs5={basestat5}
                posbs6={basestat6}
                /> :<></>}
            </>
        </div>
    )
}

export default PokemonCard