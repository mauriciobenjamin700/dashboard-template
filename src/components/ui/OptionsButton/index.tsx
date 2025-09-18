import React, { forwardRef } from "react";
import styles from "./styles.module.css";

const OptionsButton = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    (props, ref) => (
        <button className={styles.container} title="Ações" ref={ref} {...props}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="5" r="2" fill="#6b7280"/>
                <circle cx="12" cy="12" r="2" fill="#6b7280"/>
                <circle cx="12" cy="19" r="2" fill="#6b7280"/>
            </svg>
        </button>
    )
);

OptionsButton.displayName = "OptionsButton";
export default OptionsButton;