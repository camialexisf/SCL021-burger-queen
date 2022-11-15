import { useState } from "react";
import { Breakfast } from "./Breakfast";
import { Lunch } from "./Lunch";

export function MenuOptions() {
  const [toggleState, setToggleState] = useState(1);

  const toggleMenu = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tableContainer">
      <div className="block-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleMenu(1)}
        >
          Desayuno
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleMenu(2)}
        >
          Almuerzo & cena
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content active-content" : "content"}
        >
          <Breakfast />
        </div>
        <div
          className={toggleState === 2 ? "content active-content" : "content"}
        >
          <Lunch />
        </div>
      </div>
    </div>
  );
}
