import React from "react";
import styles from "../../styles/pokemonDetail/title.module.css";
import { capitalizeStr, getPokemonNumbar } from "../../helpers/pokemonCard";

function Title(props) {
  const { name, number } = props;
  return (
    <div className={styles.Container}>
      <p className={styles.name}>{capitalizeStr(name)}</p>
      <p className={styles.number}>{getPokemonNumbar(number)}</p>
    </div>
  );
}

export default Title;
