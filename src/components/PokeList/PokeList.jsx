import React, { useEffect, useState } from 'react'
import { PokemonCard } from '../PokemonCard/PokemonCard';
import './PokeList.css'
export const PokeList = () => {
    const [allPokemons,setAllPokemons]=useState([])
    const getAllPokemons = async () => {
      try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=480&offset=0");
        const data = await respuesta.json();
        createPokemonObject(data.results)
        console.log(data);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        // Handle the error gracefully, e.g., display an error message to the user
      }
    };
    

    async function createPokemonObject(results){
      results.forEach(async(pokemon)=>{
        const res=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =await res.json()
        setAllPokemons((currentList)=>[...currentList,data])
         allPokemons.sort((a,b)=>a.id-b.id)
      })
    }

    useEffect(()=>{
      getAllPokemons()
    },[])
  return (
    <div className="app-container">
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemonState)=>(
            <>
            
            <PokemonCard key={pokemonState.id} name={pokemonState.name} type={pokemonState.types[0].type.name} weight={pokemonState.weight} height={pokemonState.height} image={pokemonState.sprites.other["official-artwork"].front_default} id={pokemonState.id.toString().padStart(3,"0")} 
            stats={pokemonState.stats.map((stat)=> stat.base_stat).slice(0,3)}
            statsName={pokemonState.stats.map((stat)=> stat.stat.name).slice(0,3)}
            
            
            />
            </>

          ))}
        </div>
      </div>
    </div>
  )
}
