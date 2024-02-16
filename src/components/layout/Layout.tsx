import { PropsWithChildren } from "react";
import { SideBar } from "./sidebar/Sidebar";
import styles from "./Layout.module.scss";

export const Layout = ({ children }: PropsWithChildren<unknown>) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <main className="w-full h-full">{children}</main>
    </div>
  );
};
