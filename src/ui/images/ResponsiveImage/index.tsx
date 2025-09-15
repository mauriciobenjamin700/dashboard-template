import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

export default function ResponsiveImage() {
  return (
    <div className={styles.responsiveImageWrapper}>
      <div className={styles.responsiveImageOverflow}>
        <Image
          src="/images/grid-image/image-01.png"
          alt="Cover"
          className={styles.responsiveImage}
          width={1054}
          height={600}
        />
      </div>
    </div>
  );
}
