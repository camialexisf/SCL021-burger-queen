import { useState } from "react";
import { useAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { Alert } from "./Alert";
import bandidoTexto from "./img/bandidoTexto.png";
export default function Register() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      console.log(error.code);
      if (error.code === "auth/internal-error") {
        setError("Correo Invalido");
      } else if (error.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 carácteres");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Ya tienes cuenta, intenta iniciar sesión");
      }
    }
  };
  return (
    <div className="formContainer">
      <div>
        <img src={bandidoTexto} alt="logoBandido" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="formTitle">Registro</h2>
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
          </label>{" "}
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
        <button className="mainButton">Crear cuenta</button>
        <p className="bottomText">
          Ya tienes cuenta?
          <Link to="/login" className="linkText">
            {" "}
            Inicia sesión aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
