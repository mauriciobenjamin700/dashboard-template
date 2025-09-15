import React from "react";
import styles from "./styles.module.css";

type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface BadgeProps {
  variant?: BadgeVariant; // Light or solid variant
  size?: BadgeSize; // Badge size
  color?: BadgeColor; // Badge color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Badge content
}

const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
}) => {
  const sizeClasses = {
    sm: styles.badgeSm,
    md: styles.badgeMd,
  };
  const colorClasses = {
    light: {
      primary: styles.badgeLightPrimary,
      success: styles.badgeLightSuccess,
      error: styles.badgeLightError,
      warning: styles.badgeLightWarning,
      info: styles.badgeLightInfo,
      light: styles.badgeLightLight,
      dark: styles.badgeLightDark,
    },
    solid: {
      primary: styles.badgeSolidPrimary,
      success: styles.badgeSolidSuccess,
      error: styles.badgeSolidError,
      warning: styles.badgeSolidWarning,
      info: styles.badgeSolidInfo,
      light: styles.badgeSolidLight,
      dark: styles.badgeSolidDark,
    },
  };
  const sizeClass = sizeClasses[size];
  const colorClass = colorClasses[variant][color];

  return (
    <span className={`${styles.badge} ${sizeClass} ${colorClass}`}>
      {startIcon && <span className={styles.badgeStartIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.badgeEndIcon}>{endIcon}</span>}
    </span>
  );
};

export default Badge;
