import AppBar from "../AppBar";
import Header from "../Header";
import styles from "./styles.module.css";
import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: HeaderProps) {
  return (
    <div className={styles.layoutWrapper}>
      <AppBar />
      <div className={styles.layoutContent}>
        <Header />
        <main className={styles.layoutMain}>
          {children}
        </main>
      </div>
    </div>
  );
}