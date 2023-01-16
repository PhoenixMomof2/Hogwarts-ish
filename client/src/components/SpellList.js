import React from "react";

const SpellList = ({spells}) => {
  console.log("Rendering SpellList")

  if (!spells) return <h2>Loading spell data...</h2>;

  return (
    <div className="spell-list">
      <h1>List of Spells</h1>
      {spells.map((spell) => (
          <div className="spell-item" key={spell.id}>
            <h3>Spell: {spell.spell_name}</h3>
            <p>Impact: {spell.spell_impact}</p>
            <p>Points: {spell.point_value}</p>
          </div>
      ))}
    </div>
  );
};

export default SpellList;