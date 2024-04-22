import React, { useEffect, useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
import styles from "../../styles/pokemonDetail/StatsRow.module.css";
import Tag from "../home/pokemonsList/Tag";
import { fetchPokemonsWeaknesses } from "../../service/apiservices";
import { getWeaknesses } from "../../helpers/pokemonCard";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StatsRow(props) {
  const { pokemon } = props;

  const [weaknesses, setWeaknesses] = useState(null);

  useEffect(() => {
    fetchPokemonsWeaknesses(pokemon.types).then((data) => {
      const temp = getWeaknesses(data);
      setWeaknesses(temp);
    });
  }, [pokemon.types]);
  const options = {
    title: {
      text: "Stats",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "HP", y: pokemon.stats[0].base_stat || 0 },
          { label: "Attack", y: pokemon.stats[1].base_stat || 0 },
          { label: "Defense", y: pokemon.stats[2].base_stat || 0 },
          { label: "Special Attack", y: pokemon.stats[3].base_stat || 0 },
          { label: "Special Defense", y: pokemon.stats[4].base_stat || 0 },
          { label: "Speed", y: pokemon.stats[5].base_stat || 0 },
        ],
      },
    ],
  };
  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <CanvasJSChart options={options} />
      </div>
      <div className={styles.tagsContainer}>
        <div>
          <h3>Types</h3>
          <div>
            {pokemon.types.map((value) => {
              return <Tag type={value.type.name} />;
            })}
          </div>
        </div>
        <div>
          <h3>Weakness</h3>
          <div>
            {weaknesses?.map((value) => {
              return <Tag type={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatsRow;
