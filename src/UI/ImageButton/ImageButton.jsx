import styles from "../../css/UI/ImageButton/ImageButton.module.css";

const ImageButton = ({ path, alt, title, click }) => {
  return (
    <img
      className={styles.button}
      src={path}
      alt={alt}
      title={title}
      onClick={click}
    ></img>
  );
};
export default ImageButton;
