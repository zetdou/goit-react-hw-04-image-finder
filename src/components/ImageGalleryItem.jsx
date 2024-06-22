import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/ImageGalleryItem.module.css";

export default class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { largeImageURL, onClick } = this.props;
    onClick(largeImageURL);
  };

  render() {
    const { webformatURL } = this.props;

    return (
      <li className={styles.imageGalleryItem} onClick={this.handleClick}>
        <img
          className={styles.imageGalleryItemImage}
          src={webformatURL}
          alt=""
        />
      </li>
    );
  }
}
