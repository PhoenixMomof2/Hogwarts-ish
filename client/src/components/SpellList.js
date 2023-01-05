import React from "react";

const SpellList = ({spells}) => {
  
  // if (!spells) return <h2>Loading spell data...</h2>;

  return (
    <div className="spell-list">
      <h1>List of Spells</h1>
      {spells.map((spell) => (
          <div>
            <h2>{spell.name}</h2>
            <p>Impact: {spell.spell_impact}</p>
          </div>
      ))}
    </div>
  );
}

export default SpellList;