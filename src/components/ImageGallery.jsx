import { Component } from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
import styles from "../styles/ImageGallery.module.css";

export default class ImageGallery extends Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

  render() {
    const { images, onImageClick } = this.props;

    return (
      <ul className={styles.gallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={onImageClick}
          />
        ))}
      </ul>
    );
  }
}
