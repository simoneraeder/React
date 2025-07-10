import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import styles from './Layout.module.css';


export default function Layout() {
  return (
    <>
    <div className={styles.container} >
      <Header />
      <main className={styles.content} >
        <Outlet />
      </main>
      <Footer />
      </div>
    </>
  );
}
