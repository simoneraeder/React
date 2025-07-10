import { useNavigate, useParams } from "react-router";
import styles from "./Detalhes.module.css";

export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();
  const VoltarparaHome = () => {
    const id = 123; // pode ser qualquer valor dinâmico
    navigate(`/Home/${id}`);
      }

   return (
    <div className={styles.detalhes} >
      <h1>Detalhes</h1>
      
      <p>ID recebido: <span className={styles.id} >{id}</span></p>
      <button onClick={()=> navigate("/")}className={styles.backButton}>Voltar para Home</button>
    </div>
  );

}
