import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";

interface AvatarProps {
  src: string; // URL of the avatar image
  alt?: string; // Alt text for the avatar
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge"; // Avatar size
  status?: "online" | "offline" | "busy" | "none"; // Status indicator
}

const sizeClasses = {
  xsmall: styles.xsmall,
  small: styles.small,
  medium: styles.medium,
  large: styles.large,
  xlarge: styles.xlarge,
  xxlarge: styles.xxlarge,
};

const statusSizeClasses = {
  xsmall: styles.statusXsmall,
  small: styles.statusSmall,
  medium: styles.statusMedium,
  large: styles.statusLarge,
  xlarge: styles.statusXlarge,
  xxlarge: styles.statusXxlarge,
};

const statusColorClasses = {
  online: styles.statusOnline,
  offline: styles.statusOffline,
  busy: styles.statusBusy,
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "User Avatar",
  size = "medium",
  status = "none",
}) => {
  return (
    <div className={`${styles.avatar} ${sizeClasses[size]}`}>
      {/* Avatar Image */}
      <Image
        width="0"
        height="0"
        sizes="100vw"
        src={src}
        alt={alt}
        className={styles.avatarImage}
      />

      {/* Status Indicator */}
      {status !== "none" && (
        <span
          className={`${styles.statusIndicator} ${statusSizeClasses[size]} ${statusColorClasses[status] || ""}`}
        ></span>
      )}
    </div>
  );
};

export default Avatar;
