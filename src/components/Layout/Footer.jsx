import styles from "./_layout.module.sass";

export const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer-container"]}>
        <ul className={styles["social"]}>
          <li>twitter</li>
          <li>instagram</li>
          <li>tiktok</li>
        </ul>

        <div className={styles["legal-foot"]}>
          <small>&copy; 2022</small>
          <ul>
            <li>Term of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
