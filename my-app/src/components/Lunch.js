import React from "react";
import data from "../context/menu.json";
import { useAuth } from "../context/authContext";

export function Lunch(props) {
  const { cart, setCart } = useAuth();

  const addCart = (element) => {
    if (cart.some((item) => item.id === element.id)) {
      const arrCart = cart.map((item) =>
        item.id === element.id ? { ...item, cant: item.count + 1 } : item
      );
      setCart(arrCart);
    } else {
      setCart([
        ...cart,
        { id: element.id, name: element.name, price: element.price, count: 1 },
      ]);
    }
  };
  return (
    <div id="menuContainer">
      <div data-content id="menu2">
        {data.lunch.map((element) => {
          return (
            <button
              onClick={() => addCart(element)}
              className="menuChoice"
              id="btnMenu2"
              key={element.id}
            >
              {props.name}
              {element.name}
              <br></br> {element.badge}
              {element.price}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* export function Lunch() {
  return (
    <div className="breakfastContainer">
      <button className="menuChoice">Bandido Simple</button>
      <button className="menuChoice">Bandido Doble</button>
      <button className="menuChoice">Papas Fritas</button>
      <button className="menuChoice">Aros de Cebolla</button>
      <button className="menuChoice">Bebida</button>
      <button className="menuChoice">Cerveza</button>
      <button className="menuChoice">Agua mineral con gas</button>
      <button className="menuChoice">Agua mineral sin gas</button>
    </div>
  );
} */
