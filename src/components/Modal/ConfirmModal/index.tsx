import Modal from "@/components/Modal";
import styles from "./styles.module.css";

interface ConfirmModalProps {
    title: string;
    content: string;
    onConfirm: () => void;
    onCancel: () => void;
    open: boolean;
}

export default function ConfirmModal({ title, content, onConfirm, onCancel, open }: ConfirmModalProps) {
    return (
        <Modal open={open} onClose={onCancel}>
            <div className={styles.confirmModal}>
                <h2
                    className={styles.confirmTitle}
                >
                    {title}
                </h2>
                <p
                    className={styles.confirmContent}
                >
                    {content}
                </p>
                <div className={styles.buttonsRow}>
                    <button
                        className={`${styles.button} ${styles.cancelButton}`}
                        onClick={onCancel}
                    >
                        Cancelar
                    </button>
                    <button
                        className={`${styles.button} ${styles.confirmButton}`}
                        onClick={onConfirm}
                    >
                        Confirmar
                    </button>
                </div>

            </div>
        </Modal>
    )
}