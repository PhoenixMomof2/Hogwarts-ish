import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const WizardForm = ({handleAddNewWizard, handleAddNewSpell}) => {
const history = useHistory();

  const [wizard_name, setWizard_Name] = useState("");
  const [house_name, setHouse_Name] = useState("");
  const [img_url, setImg_Url] = useState("");
  const [traits, setTraits] = useState("");
  const [spell_name, setSpell_Name] = useState("");
  const [spell_impact, setSpell_Impact] = useState("");
  const [point_value, setPoint_Value] = useState("");
  
  // SUBMIT FORM
  const handleSubmit =  (e) => {
    e.preventDefault();

    const newWizardData = {
      wizard_name,
      house_name,
      img_url,
      traits,
    };
    console.log(newWizardData);
   
    //CREATE (POST REQUEST)
      fetch("http://localhost:9292/wizards", {
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
            history.push(`/wizards/${newWizard.id}`)
        });
      
        // clear form
        setWizard_Name("");
        setHouse_Name("");
        setImg_Url("");
        setTraits("");
        setSpell_Name("");
        setSpell_Impact("");
        setPoint_Value("");
      };

  return (
    <div className="new-wizard">
      <br />
      <h2>Create A Wizard!</h2>
      <form className="create-new-wizard" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-wizard-name">Wizard Name   </label>
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
          <label htmlFor="assign-house">   Join A House   </label>
          <select
            type="text"
            id="assign-house"
            value={house_name}
            onChange={(e) => setHouse_Name(e.target.value)}
            >
            <option house_name="Gryffindor">   Gryffindor</option>
            <option house_name="Hufflepuff">   Hufflepuff</option>
            <option house_name="Ravenclaw">   Ravenclaw</option>
            <option house_name="Slytherin">   Slytherin</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="img_url">   New Wizard Image Source   </label>
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
          <label htmlFor="traits">   New Wizard Traits   </label>
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
          <label htmlFor="new-spell-name">   Spell Name   </label>
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
          <label htmlFor="new-spell-impact">   Spell Impact   </label>
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
        <label htmlFor="new-spell-point-value">   Spell Point Value   </label>
          <select
            type="text"
            id="new-spell-point-value"
            value={point_value}
            onChange={(e) => setPoint_Value(e.target.value)}
            >
            <option point_value="1"> 1 </option>
            <option point_value="1"> 2 </option>
            <option point_value="3"> 3 </option>
            <option point_value="4"> 4 </option>
            <option point_value="5"> 5 </option>
          </select>
        </div>
        <br />
        <label htmlFor="submit">   Create New Wizard   </label>
        <input type="submit" name="submit" value="Submit" className="submit" />
      </form>
    </div>
  );
};

export default WizardForm;