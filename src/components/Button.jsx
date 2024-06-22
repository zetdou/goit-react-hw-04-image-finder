import { Component } from "react";
import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={onClick} className={styles.loadMoreBtn}>
        Load more
      </button>
    );
  }
}
