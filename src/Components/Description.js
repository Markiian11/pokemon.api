import React from 'react'


const Description = ({heightpokemon,weightpokemon,pokemonstat1,pokemonstat2,pokemonstat3,pokemonstat4,pokemonstat5,pokemonstat6,posbs1,posbs2,posbs3,posbs4,posbs5,posbs6}) => {
    return (
        <>
            <p>Height is {heightpokemon} cm.</p>
            <p>Weight is {weightpokemon} kg</p>
            <h3>Stat</h3>
            <p>{pokemonstat1} : {posbs1}</p>
            <p>{pokemonstat2} : {posbs2}</p>
            <p>{pokemonstat3} : {posbs3}</p>
            <p>{pokemonstat4} : {posbs4}</p>
            <p>{pokemonstat5} : {posbs5}</p>
            <p>{pokemonstat6} : {posbs6}</p>
        </>
    )
}

export default Description