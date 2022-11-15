import React from "react";
import data from "../context/menu.json";
import { useAuth } from "../context/authContext";

export function Breakfast(props) {
  const { cart, setCart } = useAuth();

  const addCart = (element) => {
    if (cart.some((item) => item.id === element.id)) {
      const cartArray = cart.map((item) =>
        item.id === element.id ? { ...item, cant: item.count + 1 } : item
      );
      setCart(cartArray);
    } else {
      setCart([
        ...cart,
        { id: element.id, name: element.name, price: element.price, count: 1 },
      ]);
    }
  };
  return (
    <div className="menuContainer">
      <div data-content id="menu1" className="active">
        {data.breakfast.map((element) => {
          return (
            <button
              onClick={() => addCart(element)}
              className="menuChoice"
              id="btnMenu1"
              key={element.id}
            >
              {props.name}
              {element.name} <br></br>
              {element.badge}
              {element.price}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* export function Breakfast() {
  return (
    <div className="breakfastContainer">
      <button className="menuChoice">Cafe americano</button>
      <button className="menuChoice">Cafe con leche</button>
      <button className="menuChoice">Jugo natural</button>
      <button className="menuChoice">Bandido Planchado</button>
    </div>
  );
} */
