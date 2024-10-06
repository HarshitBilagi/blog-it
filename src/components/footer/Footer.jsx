import styles from "./footer.module.css";

const Footer = () => {
  const date = new Date();
  var getYear = date.getFullYear();

  return (
    <div className={styles.container}>
      <div className={styles.text}>Harshit &copy; {getYear}</div>
    </div>
  );
};

export default Footer;
