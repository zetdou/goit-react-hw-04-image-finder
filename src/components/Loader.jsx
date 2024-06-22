import { Component } from "react";
import { TailSpin } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.loader}>
        <TailSpin
          visible={true}
          height="80"
          width="80"
          color="#3f51b5"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
}
