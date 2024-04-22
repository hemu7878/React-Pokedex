import React from "react";
import styles from "../../styles/home/searchbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { fetchSearchedPokemon } from "../../service/apiservices";

function SearchBar(props) {
  const { query, setQuery, setSearchedPokemon } = props;

  function handleChange(e) {
    setQuery(e.target.value);
    if (e.target.value === "") {
      setSearchedPokemon(null);
    }
  }
  function handleSearch() {
    fetchSearchedPokemon(query).then((data) => {
      setSearchedPokemon(data);
    });
  }
  return (
    <div className={styles.SearchBar}>
      <div></div>
      <input
        type="text"
        className={styles.SearchBarinner}
        placeholder="Name or Number"
        onChange={handleChange}
        value={query}
      />
      <button className={styles.SearchBarBtn} onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}

export default SearchBar;
