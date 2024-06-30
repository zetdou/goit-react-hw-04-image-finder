import React, { useState, useEffect } from "react";
import axios from "axios";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import Loader from "./Loader";
import Modal from "./Modal";
import styles from "../styles/App.module.css";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState("");

  useEffect(() => {
    if (!query) return;

    const fetchImages = async () => {
      const apiKey = "43699308-360c89c4f1edc33425ecfb3a2";
      const URL = `https://pixabay.com/api/?q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;

      setIsLoading(true);

      try {
        const response = await axios.get(URL);
        setImages((prevImages) => [...prevImages, ...response.data.hits]);
      } catch (error) {
        console.error("Error fetching images: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImages();
  }, [query, page]);

  const handleSearch = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (largeImageURL) => {
    setLargeImageURL(largeImageURL);
    setShowModal(true);
  };

  const closeModal = () => {
    setLargeImageURL("");
    setShowModal(false);
  };
  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearch} />
      <ImageGallery images={images} onImageClick={openModal} />
      {isLoading && <Loader />}
      {images.length > 0 && <Button onClick={loadMore} />}
      {showModal && (
        <Modal largeImageURL={largeImageURL} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
