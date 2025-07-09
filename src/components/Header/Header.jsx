import { Link } from "react-router";


export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/detalhes/123">Detalhes (exemplo)</Link>
      </nav>
    </header>
  );
}
