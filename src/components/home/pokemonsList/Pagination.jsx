import React from "react";
import styles from "../../../styles/home/Pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TOTAL_PAGES } from "../../../constants";

function Pagination(props) {
  const { setPage, page } = props;

  function handlePrev() {
    if (page > 0) {
      setPage(page - 1);
    } else {
      setPage(TOTAL_PAGES);
    }
    window.scroll(0, 0);
  }
  function handleNext() {
    if (page < TOTAL_PAGES) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
    window.scroll(0, 0);
  }
  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} /> Prev
      </button>
      <button onClick={handleNext}>Next
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Pagination;
