import React from 'react'
import styles from "../../../styles/home/pokemon.module.css";

function Tag(props) {

    const {type} = props;
    const typeClassName = `type-${type.toLowerCase()}`;

  return <div className={`${styles.tag} ${styles[typeClassName]}`}>{type}</div>;
}

export default Tag