import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";
import bandidoTexto from "./img/bandidoTexto.png";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/wrong-password") {
        setError("Contraseña Invalida");
      } else if (error.code === "auth/user-not-found") {
        setError("Aun no tienes cuenta, registrate!");
      } else if (error.code === "auth/invalid-email") {
        setError("Ingresa tus datos para iniciar sesion");
      }
    }
  };
  return (
    <div className="formContainer">
      <div>
        <img src={bandidoTexto} alt="logoBandido" />
      </div>

      <form onSubmit={handleSubmit} className="form">
        <h2 className="formTitle">Inicio Sesion</h2>
        <div className="inputContainer">
          <label htmlFor="email" className="inputLabel">
            Email
          </label>
          <br></br>
          <input
            type="email"
            placeholder="   tuCorreo@bandido.cl"
            className="input"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="inputContainer">
          <label htmlFor="password" className="inputLabel">
            Contraseña
          </label>
          <br></br>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            onChange={handleChange}
            placeholder="   ******"
          />
        </div>
        {error && <Alert message={error} />}
        <button className="mainButton">Entrar</button>
        <p className="bottomText">
          No tienes cuenta?{" "}
          <Link to="/register" className="linkText">
            {" "}
            Registrate aquí{" "}
          </Link>
        </p>
      </form>
    </div>
  );
}
