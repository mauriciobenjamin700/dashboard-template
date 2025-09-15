import React from "react";
import styles from "./styles.module.css";

interface AvatarTextProps {
  name: string;
  className?: string;
}

const AvatarText: React.FC<AvatarTextProps> = ({ name, className = "" }) => {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  // Generate a consistent pastel color based on the name
  const getColorClass = (name: string) => {
    const colors = [
      styles.brand,
      styles.pink,
      styles.cyan,
      styles.orange,
      styles.green,
      styles.purple,
      styles.yellow,
      styles.error,
    ];
    const index = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[index % colors.length];
  };

  return (
    <div
      className={`${styles.avatarText} ${className} ${getColorClass(name)}`}
    >
      <span className={styles.avatarTextInitials}>{initials}</span>
    </div>
  );
};

export default AvatarText;
