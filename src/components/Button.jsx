import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

const Button = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className={styles.loadMoreBtn}>
      Load more
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
