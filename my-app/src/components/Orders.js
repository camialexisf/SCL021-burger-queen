import { useState, useEffect } from "react";
import React from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
export function Orders() {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    const ordersCollectionRef = collection(db, "orders");
    const getOrder = async () => {
      const data = await getDocs(ordersCollectionRef);
      setOrder(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getOrder();
  }, []);

  return (
    <div className="orderDisplay">
      {orders.map((order) => {
        return (
          <div>
            <p>Plato: {order.dish}</p>
            <p>Precio: {order.price}</p>
          </div>
        );
      })}
    </div>
  );
}
