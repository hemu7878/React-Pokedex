import React from "react";
import styles from "../../styles/pokemonDetail/navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { fetchSearchedPokemon } from "../../service/apiservices";

function Navigation(props) {
  const { pokemon, setPokemon } = props;
  const navigate = useNavigate();

  // function handleNext() {
  //   if (pokemon.id < 1024) {
  //     fetchSearchedPokemon(pokemon.id + 1).then((data) => {
  //       setPokemon(data);
  //     });
  //   } else if (pokemon.id === 1025) {
  //     fetchSearchedPokemon(10001).then((data) => {
  //       setPokemon(data);
  //     });
  //   } else {
  //     fetchSearchedPokemon(pokemon.id + 1).then((data) => {
  //       setPokemon(data);
  //     });
  //   }
  // }

  // function handlePrev() {
  //   if (pokemon.id > 1) {
  //     fetchSearchedPokemon(pokemon.id - 1).then((data) => {
  //       setPokemon(data);
  //     });
  //   }
  // }

  function handleGoBack() {
    navigate(-1);
  }
  function handlePrev() {
    fetchSearchedPokemon(pokemon.id - 1).then((data) => {
      setPokemon(data);
    });
  }
  function handleNext() {
    fetchSearchedPokemon(pokemon.id + 1).then((data) => {
      setPokemon(data);
    });
  }
  // function handleGoBack() {
  //   navigate(-1);
  // }

  return (
    <div className={styles.Container}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
        Perv
      </button>
      <button onClick={handleGoBack}>Go Back</button>

      <button onClick={handleNext}>
        Next <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Navigation;
