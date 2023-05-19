import React,{useEffect,useState} from "react";
import PokemonCard from "./Components/PokemonCard";

function App() {
  const [allPokemons,setAllPokemons] = useState([]);
  const [loadPokemons,setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=10');
  const getAllPokemons = async () => {
    const res = await fetch(loadPokemons)
    const data = await res.json()
    setLoadPokemons(data.next)
  
    function createPokemonObject(result){
      result.forEach(async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json();
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    createPokemonObject(data.results)
    await console.log(allPokemons)
  }
  
  useEffect(()=>{
    getAllPokemons()
  },[])
  
  return (
    <main>
      <h1>Pokemons.</h1>
      <div>
        <div className="pokemons">
            {allPokemons.map((pokemon,index)=> 
                  <PokemonCard
                    id = {pokemon.id}
                    name = {pokemon.name}
                    image = {pokemon.sprites.other.dream_world.front_default}
                    type={pokemon.types[0].type.name}
                    key={index}
                    height = {pokemon.height}
                    weight = {pokemon.weight}
                    stat1 = {pokemon.stats[0].stat.name}
                    stat2 = {pokemon.stats[1].stat.name}
                    stat3 = {pokemon.stats[2].stat.name}
                    stat4 = {pokemon.stats[3].stat.name}
                    stat5 = {pokemon.stats[4].stat.name}
                    stat6 = {pokemon.stats[5].stat.name}
                    basestat1 = {pokemon.stats[0].base_stat}
                    basestat2 = {pokemon.stats[1].base_stat}
                    basestat3 = {pokemon.stats[2].base_stat}
                    basestat4 = {pokemon.stats[3].base_stat}
                    basestat5 = {pokemon.stats[4].base_stat}
                    basestat6 = {pokemon.stats[5].base_stat}
                  />
              )}
        </div>
        <button className="more_btn" onClick={() => getAllPokemons()}>More Pokemons</button>
      </div>
    </main>
  );
}

export default App;