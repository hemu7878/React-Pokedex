import React from "react";
import styles from "../../../styles/home/pokemon.module.css";
import Tag from "./Tag";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumbar,
} from "../../../helpers/pokemonCard";
import { useNavigate } from "react-router-dom";

function PokemonCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function GoToDetail(){
    navigate(`pokemonDetail/${pokemon.name}`);
  }
  
  return (
    <div className={styles.cardContainer} onClick={GoToDetail}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
      </div>
      <div className={styles.infoContiner}>
        <p className={styles.pokemonNumber}>{getPokemonNumbar(pokemon.id)}</p>
        <p className={styles.pokemonname}>{capitalizeStr(pokemon.name)}</p>
        {pokemon.types.map((type) => {
          return <Tag type={type.type.name} />;
        })}
      </div>
    </div>
  );
}

export default PokemonCard;
