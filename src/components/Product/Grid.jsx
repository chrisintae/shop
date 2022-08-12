import Image from "next/image";

import styles from "./_product.module.sass";

export const Grid = ({ data }) => {
  return (
    <div className={`wrapper ${styles["wrapper"]}`}>
      <div className={`container ${styles["container"]}`}>
        <div className={styles["grid"]}>
          {data.map((item, ind) => (
            <div key={ind}>
              <Image
                src="https://picsum.photos/seed/picsum/500/500"
                width={500}
                height={500}
              />
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
