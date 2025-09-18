import styles from "./styles.module.css"
import React from 'react'

interface KPIGridProps {
    children: React.ReactNode;
    gridColumns?: number; // Optional prop to customize number of columns
}

export default function KPIGrid({ children, gridColumns = 4 }: KPIGridProps) {
    return (
        <div 
        className={styles.container} 
        style={{ gridTemplateColumns: `repeat(${gridColumns}, 1fr)` }}>
            {children}
        </div>
    )
}