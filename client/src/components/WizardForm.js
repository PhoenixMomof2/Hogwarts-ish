import React, { useState } from "react";

const WizardForm = ({handleAddNewWizard, handleAddNewSpell}) => {
 
  const [wizard_name, setWizard_Name] = useState("");
  const [img_url, setImg_Url] = useState("");
  const [house_name, setHouse_Name] = useState("");
  const [traits, setTraits] = useState("");
  const [spell_name, setSpell_Name] = useState("");
  const [spell_impact, setSpell_Impact] = useState("");
  const [point_value, setPoint_Value] = useState({ point_value: "1" });
  
  const handleSubmit =  (e) => {
    e.preventDefault();

    const newWizardData = {
      wizard_name,
      img_url,
      house_name,
      traits,
    };
    console.log(newWizardData);
   
      fetch("http://localhost:9292/wizards/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWizardData),
      })
        .then((res) => res.json())
        .then((newWizard) => {
          handleAddNewWizard(newWizard)
          const newSpellData = {
            spell_name,
            spell_impact,
            point_value,
            wizard_id: newWizard.id,
          }
          // create key value pair so new data can go to schema correctly
          console.log(newSpellData);
          fetch("http://localhost:9292/spells", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newSpellData),
          })
            .then((res) => res.json())
            .then((newSpell) => handleAddNewSpell(newSpell)); // update state
        });
      
        // clear form
        setWizard_Name("");
        setImg_Url("");
        setHouse_Name("");
        setTraits("");
        setSpell_Name("");
        setSpell_Impact("");
        setPoint_Value("");
      };

  return (
    <div>
      <br />
      <h2>Create A Wizard!</h2>
      <form className="NewWizard" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-wizard-name">Wizard Name</label>
          <input
            type="text"
            id="new-wizard-name"
            placeholder="Enter Wizard Name"
            value={wizard_name}
            onChange={(e) => setWizard_Name(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="assign-house">Join A House</label>
          <input
            type="text"
            id="assign-house"
            placeholder="Choose House"
            value={house_name}
            onChange={(e) => setHouse_Name(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="img_url">New Wizard Image Source</label>
          <input
            type="text"
            id="img_url"
            placeholder="Enter Image Source"
            value={img_url}
            onChange={(e) => setImg_Url(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="traits">New Wizard Traits</label>
          <input
            type="text"
            id="traits"
            placeholder="Enter New Wizard Traits"
            value={traits}
            onChange={(e) => setTraits(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="new-spell-name">Spell Name</label>
          <input
            type="text"
            id="new-spell-name"
            placeholder="Enter Spell Name"
            value={spell_name}
            onChange={(e) => setSpell_Name(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="new-spell-impact">Spell Impact</label>
          <input
            type="text"
            id="new-spell-impact"
            placeholder="Enter Spell Impact"
            value={spell_impact}
            onChange={(e) => setSpell_Impact(e.target.value)}
          />
        </div>
        <br />
        <div>
        <label htmlFor="new-spell-point-value">Spell Impact</label>
          <select
            name="new-spell-point-value"
            id="new-spell-point-value"
            placeholder="Enter Spell Point Value"
            onChange={(e) => setPoint_Value(e.target.value)}
             >
            <option point_value="1">1</option>
            <option point_value="1">2</option>
            <option point_value="3">3</option>
            <option point_value="4">4</option>
            <option point_value="5">5</option>
          </select>
        </div>
        <br />
        <label htmlFor="submit">Create New Wizard</label>
        <input type="submit" name="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default WizardForm;