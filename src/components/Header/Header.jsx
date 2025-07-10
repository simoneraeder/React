import { Link } from "react-router";
import styles from "./Header.module.css";


export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.link} to="/">Home</Link> {' |'} 
        <Link className={styles.link} to="/detalhes/123">Detalhes</Link>
      </nav>
    </header>
  );
}
