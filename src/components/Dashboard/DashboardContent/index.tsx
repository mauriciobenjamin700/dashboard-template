import styles from './styles.module.css'
import React from 'react'

interface DashboardContentProps {
    children?: React.ReactNode;
}

export default function DashboardContent({children}: DashboardContentProps) {
  return (
    <main className={styles.dashboardContent}>
      {children}
    </main>
  )
}