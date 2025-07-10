import { useNavigate } from "react-router";
import styles from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();

  const irParaDetalhes = () => {
    const id = 42; // pode ser qualquer valor dinâmico
    navigate(`/detalhes/${id}`);
  };

   
  return (
    <div className={styles.home} >
      <h1 className={styles.title} >Home</h1>
      <button onClick={()=> navigate("/detalhes/123")} className={styles.button} >Ir para Detalhes</button>
    </div>
  );

  
}
