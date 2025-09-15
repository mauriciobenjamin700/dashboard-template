"use client";

import { useSidebar } from "@/context/SideBarContext";
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";
import Backdrop from "@/components/Backdrop";
import React from "react";
import styles from "./styles.module.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? styles.mainContentMarginMobile
    : isExpanded || isHovered
    ? styles.mainContentMarginExpanded
    : styles.mainContentMarginCollapsed;

  return (
    <div className={styles.adminLayoutWrapper}>
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      <Backdrop />
      {/* Main Content Area */}
      <div className={`${styles.mainContent} ${mainContentMargin}`}>
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className={styles.pageContent}>{children}</div>
      </div>
    </div>
  );
}
