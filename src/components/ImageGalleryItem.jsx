import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/ImageGalleryItem.module.css";

const ImageGalleryItem = ({ webformatURL, largeImageURL, onClick }) => {
  const handleClick = () => {
    onClick(largeImageURL);
  };

  return (
    <li className={styles.imageGalleryItem} onClick={handleClick}>
      <img className={styles.imageGalleryItemImage} src={webformatURL} alt="" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
