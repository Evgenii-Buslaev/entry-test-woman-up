import styles from "../../css/UI/ImageButton/ImageButton.module.css";

const ImageButton = ({ path }) => {
  return <img className={styles.button} src={path} alt={alt}></img>;
};
export default ImageButton;
