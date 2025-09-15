import React, { ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  children: ReactNode; // Button text or content
  size?: "sm" | "md"; // Button size
  variant?: "primary" | "outline"; // Button variant
  startIcon?: ReactNode; // Icon before the text
  endIcon?: ReactNode; // Icon after the text
  onClick?: () => void; // Click handler
  disabled?: boolean; // Disabled state
  className?: string; // Disabled state
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  variant = "primary",
  startIcon,
  endIcon,
  onClick,
  className = "",
  disabled = false,
}) => {
  // Size Classes
  const sizeClasses = {
    sm: styles.btnSm,
    md: styles.btnMd,
  };

  const variantClasses = {
    primary: styles.btnPrimary,
    outline: styles.btnOutline,
  };

  return (
    <button
      className={`${styles.btn} ${sizeClasses[size]} ${variantClasses[variant]} ${className} ${disabled ? styles.btnDisabled : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {startIcon && <span className={styles.btnIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={styles.btnIcon}>{endIcon}</span>}
    </button>
  );
};

export default Button;
