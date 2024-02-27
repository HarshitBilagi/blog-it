import styles from "../footer/footer.module.css";

export default function Footer() {
  var newYear = new Date();

  return (
    <div className={styles.Footer}>
      <span className={styles.span}>
        &copy; Blog-it {newYear.getFullYear()}{" "}
      </span>
    </div>
  );
}
