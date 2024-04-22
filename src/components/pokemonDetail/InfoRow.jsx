import React, { useEffect, useState } from "react";
import styles from "../../styles/pokemonDetail/infoRow.module.css";
import {
  getPokemonAbilities,
  getPokemonCategory,
  getPokemonDesc,
  getPokemonHeight,
  getPokemonImage,
  getPokemonWeight,
} from "../../helpers/pokemonCard";
import Loader from "../../common/Loader";
import Error from "../../common/Error";
import {
  fetchSearchedPokemon,
  fetchSpeciesDetails,
} from "../../service/apiservices";
import useCustomFetch from "../../customHooks/useCustomFetch";

function InfoRow(props) {
  const { pokemon } = props;
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    fetchSpeciesDetails(pokemon.species.url).then((data) => {
      setSpeciesDetails(data);
    });
  }, [pokemon.species.url]);

  function customFetch(setLoading, setData, setError) {
    fetchSearchedPokemon(pokemon.species.url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setError(error))
      .finally(() => {
        setLoading(false);
      });
  }

  const {
    loading,
    // data: speciesDetails,
    error,
  } = useCustomFetch(customFetch, [pokemon.species.url]);

    // if (loading)
    //   return (
    //     <Loader
    //       loaderSize="3rem"
    //       containerHeight="calc(100vh - 220.39px)"
    //       containerWidth="100%"
    //     />
    //   );

    // if (error) {
    //   return <Error message={error?.message} />;
    // }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.desc}>
          {getPokemonDesc(speciesDetails?.flavor_text_entries)}
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <p>Height</p>
                <p>{getPokemonHeight(pokemon.height)}</p>
              </td>
              <td>
                <p>Weight</p>
                <p>{getPokemonWeight(pokemon.weight)}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Abilities</p>
                <p>{getPokemonAbilities(pokemon.abilities)}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Category</p>
                <p>{getPokemonCategory(speciesDetails?.genera)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
