import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchSearchedPokemon } from "../service/apiservices";
import Navigation from "../components/pokemonDetail/Navigation";
import Title from "../components/pokemonDetail/Title";
import InfoRow from "../components/pokemonDetail/InfoRow";
import StatsRow from "../components/pokemonDetail/StatsRow";
import EvolutionsRow from "../components/pokemonDetail/evolutionRow/EvolutionsRow";

function PokemonDetail() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);

  console.log("params", params);

  useEffect(() => {
    fetchSearchedPokemon(params.name)
      .then((data) => {
        setPokemon(data);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, [params.name]);

  console.log("pokemon", pokemon);
  if (!pokemon) return null;

  return (
    <div>
      <Navigation />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon}/>
      <StatsRow pokemon={pokemon}/>
      <EvolutionsRow species={pokemon.species}/>
    </div>
  );
}

export default PokemonDetail;
