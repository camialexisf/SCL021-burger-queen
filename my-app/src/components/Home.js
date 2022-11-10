import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function Home() {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  if (loading) return <h1>Cargando...</h1>;
  return (
    <div>
      <h1>Bienvenido {user.email}</h1>
      <button onClick={handleLogout}>Cerrar sesion</button>
    </div>
  );
}
