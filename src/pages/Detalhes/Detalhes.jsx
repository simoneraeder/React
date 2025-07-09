import { useNavigate, useParams } from "react-router";


export default function Detalhes() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Detalhes</h1>
      <p>ID recebido: {id}</p>
      <button onClick={() => navigate('/')}>Voltar para Home</button>
    </div>
  );
}
