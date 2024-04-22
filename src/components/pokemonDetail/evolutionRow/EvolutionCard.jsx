import React from "react";
import styles from "../../../styles/pokemonDetail/evolutionCard.module.css";
import Tag from "../../home/pokemonsList/Tag";
import { useNavigate } from "react-router-dom";
import {
  capitalizeStr,
  getPokemonImage,
  getPokemonNumbar,
} from "../../../helpers/pokemonCard";

function EvolutionCard(props) {
  const { pokemon } = props;
  const navigate = useNavigate();

  function goToDetails() {
    navigate(`/pokemonDetail/${pokemon.name}`);
    window.scroll(0, 0);

  }

  return (
    <div className={styles.cardContainer} onClick={goToDetails}>
      <div className={styles.imgContainer}>
        <img src={getPokemonImage(pokemon)} alt={pokemon.name} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.nameNumber}>
          <p className={styles.pokemonName}>{capitalizeStr(pokemon.name)}</p>
          <p className={styles.pokemonNumber}>{getPokemonNumbar(pokemon.id)}</p>
        </div>
        <div className={styles.tagsContainer}>
          {pokemon.types.map((type) => {
            return <Tag type={type.type.name} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default EvolutionCard;
