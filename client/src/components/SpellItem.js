import React, {useEffect} from "react";

const SpellItem = ({ spell_id }) => {

  useEffect(() => {
    fetch(`http://localhost:9292/spells/${spell_id}`)
      .then((r) => r.json())
      .then((spell) => setSpell(spell));
  }, [spell_id]);

  if (!spell) return <h2>Loading spell data...</h2>;

  return (
    <div>
      <h2>{spell.name}</h2>
      <p>Impact: {spell.spell_impact}</p>
    </div>
  );
}

export default SpellItem;