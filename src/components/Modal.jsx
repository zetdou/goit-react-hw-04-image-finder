import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Modal.module.css";

const Modal = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (ev) => {
      if (ev.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (ev) => {
    if (ev.currentTarget === ev.target) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
