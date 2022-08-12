import Image from "next/image";

import styles from "./_layout.module.sass";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <div>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </div>
    </header>
  );
};
