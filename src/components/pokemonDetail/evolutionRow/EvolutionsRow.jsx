import React from "react";
import styles from "../../../styles/pokemonDetail/evolutionRow.module.css";
import { fetchPokemonEvolutions } from "../../../service/apiservices";
import EvolutionCard from "./EvolutionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useCustomFetch from "../../../customHooks/useCustomFetch";
import Loader from "../../../common/Loader";
import Error from "../../../common/Error";

function EvolutionsRow(props) {
  const { species } = props;
  // const [evolutions, setEvolutions] = useState(null);

  function fetchEvolutions(setLoading, setData, setError) {
    fetchPokemonEvolutions(species.url)
      .then((data) => {
        setData(data.filter((value) => value !== undefined));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const {
    loading,
    data: evolutions,
    error,
  } = useCustomFetch(fetchEvolutions, [species.url]);

  // useEffect(() => {
  //   fetchPokemonEvolutions(species.url).then((data) => {
  //     setEvolutions(data);
  //   });
  // }, [species.url]);

  // if (!evolutions || !evolutions.length || !evolutions[0]) return null;

  // if (loading) {
  //   return (
  //     <Loader loaderSize="3rem" containerHeight="100%" containerWidth="100%" />
  //   );
  // }

  // if (error) {
  //   return <Error message={error?.message} />;
  // }

  return (
    <div className={styles.containerMain}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.containerInner}>
        {evolutions?.map((value, index) => {
          return (
            <>
              <EvolutionCard key={value.id} pokemon={value} />
              {index < evolutions.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  fontSize="rem"
                  color="black"
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;
