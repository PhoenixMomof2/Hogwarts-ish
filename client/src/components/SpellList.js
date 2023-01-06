import React from "react";

const SpellList = ({spells}) => {
  console.log("SpellList is working?")
  // if (!spells) return <h2>Loading spell data...</h2>;

  return (
    <div className="spell-list">
      <h2>List of Spells</h2>
      {spells.map((spell) => (
          <div key={spell.id}>
            <h3>{spell.name}</h3>
            <p>Impact: {spell.spell_impact}</p>
          </div>
      ))}
    </div>
  );
};

export default SpellList;