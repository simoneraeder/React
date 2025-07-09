import { useNavigate, useParams } from "react-router";


export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

   const VoltarparaHome = () => {
    const id = 123; // pode ser qualquer valor dinâmico
    navigate(`/Home/${id}`);
   }

   return (
    <div>
      <h1>Detalhes</h1>
      <p>ID recebido: {id}</p>
      <button onClick={()=> navigate("/123")}>Voltar para Home</button>
    </div>
  );

 }
