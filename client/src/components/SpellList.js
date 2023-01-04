import React from "react";
import SpellItem from "./SpellItem";

const SpellList = ({spells}) => {
  
  return (
    <div className="spell-list">
      <br/>
      <br/>
      <ul className="spell-cards">
        {spells.map((spell) => (
          <SpellItem key={spell.id} spell={spell} />
        ))}
      </ul>
    </div>
  );
};

export default FoodList;