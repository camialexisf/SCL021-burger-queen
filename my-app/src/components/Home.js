import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { MenuOptions } from "./menuOptions";
/* import { Breakfast } from "./Breakfast";
import { Lunch } from "./Lunch"; */
import logoutIcon from "./img/logoutIcon.png";
import React from "react";

export default function Home() {
  /*Aqui falta user, recordar en caso de que provoque errores a futuro */
  const { logout, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  if (loading) return <h1>Cargando...</h1>;

  return (
    <div className="homeContainer">
      <button onClick={handleLogout} className="logoutButton">
        {" "}
        <img src={logoutIcon} alt="logoBandido" />
        <br></br>
        Cerrar sesion
      </button>
      <MenuOptions />
    </div>
  );
}
