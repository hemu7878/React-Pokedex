import React, { useState } from "react";
import SearchBar from "../components/home/SearchBar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";
import SearchedPokemon from "../components/home/SearchedPokemon";

function Home() {
  const [searchedPokemon, setSearchedPokemon] = useState("");
  const [query, setQuery] = useState("");
  
  return (
    <div>
      <SearchBar
      query={query}
      setQuery={setQuery}
      setSearchedPokemon={setSearchedPokemon}
      />
      {searchedPokemon ? (
        <SearchedPokemon
        pokemon={searchedPokemon}
        setQuery={setQuery}
        setSearchedPokemon={setSearchedPokemon}
        />
      ):(
      <PokemonsList />
      )}
    </div>
  );
}

export default Home;
