import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

  return (
    <div className={styles.imageGridTwoCols}>
      <div>
        <Image
          src="/images/grid-image/image-02.png"
          alt=" grid"
          className={styles.imageGridItem}
          width={517}
          height={295}
        />
      </div>

      <div>
        <Image
          src="/images/grid-image/image-03.png"
          alt=" grid"
          className={styles.imageGridItem}
          width={517}
          height={295}
        />
      </div>
    </div>
  );
}
