import React, { Component } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
import styles from "../styles/App.module.css";

export default class App extends Component {
  state = {
    images: [],
    query: "",
    page: 1,
    isLoading: false,
    showModal: false,
    largeImageURL: "",
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = async () => {
    const { query, page } = this.state;
    const apiKey = "43699308-360c89c4f1edc33425ecfb3a2";
    const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

    this.setState({ isLoading: true });

    try {
      const response = await axios.get(URL);
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.data.hits],
      }));
    } catch (error) {
      console.error("Error fetching images: ", error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSearch = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  openModal = (largeImageURL) => {
    console.log("Open modal with image url: ", largeImageURL);
    this.setState({ largeImageURL, showModal: true });
  };

  closeModal = () => {
    this.setState({ largeImageURL: "", showModal: false });
  };

  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;

    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} onImageClick={this.openModal} />
        {isLoading && <Loader />}
        {images.length > 0 && <Button onClick={this.loadMore} />}
        {showModal && (
          <Modal largeImageURL={largeImageURL} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}
