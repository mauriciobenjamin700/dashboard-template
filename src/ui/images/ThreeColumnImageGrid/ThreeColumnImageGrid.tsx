import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

  return (
    <div className={styles.imageGrid}>
      <div>
        <Image
          src="/images/grid-image/image-04.png"
          alt=" grid"
          className={styles.imageGridItem}
          width={338}
          height={192}
        />
      </div>

      <div>
        <Image
          src="/images/grid-image/image-05.png"
          alt=" grid"
          className={styles.imageGridItem}
          width={338}
          height={192}
        />
      </div>

      <div>
        <Image
          src="/images/grid-image/image-06.png"
          alt=" grid"
          className={styles.imageGridItem}
          width={338}
          height={192}
        />
      </div>
    </div>
  );
}
