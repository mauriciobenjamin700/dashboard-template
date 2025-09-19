import React from 'react'
import styles from "./styles.module.css"

interface ModalProps {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
    if (!open) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>×</button>
                {children}
            </div>
        </div>
    )
}