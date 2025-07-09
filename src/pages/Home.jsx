import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  const irParaDetalhes = () => {
    const id = 42; // pode ser qualquer valor dinâmico
    navigate(`/detalhes/${id}`);
  };

   
  return (
    <div>
      <h1>Home</h1>
      <button onClick={()=> navigate("/detalhes/123")}>Ir para Detalhes</button>
    </div>
  );

  
}
