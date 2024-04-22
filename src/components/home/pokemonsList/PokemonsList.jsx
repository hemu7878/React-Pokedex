import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "../../../styles/home/pokemon.module.css";
import { fetchPokemons } from "../../../service/apiservices";
import Pagination from "./Pagination";

function PokemonsList() {
  const [pokemons, setPokemons] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemons(page).then((data) => {
      setPokemons(data);
    });
  }, [page]);

  if (!pokemons) return null;
  return (
    <div className={styles.containerList}>
      {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
      })}
      <Pagination setPage={setPage} page={page} />
    </div>
  );
}

export default PokemonsList;
