import React, { useState } from "react";

const WizardForm = ({handleAddNewWizard, handleAddNewSpell}) => {
 
  const [wizard_name, setWizard_Name] = useState("");
  const [img_url, setImg_Url] = useState("");
  const [house_name, setHouse_Name] = useState("");
  const [traits, setTraits] = useState("");
  const [spell_name, setSpell_Name] = useState("");
  const [spell_impact, setSpell_Impact] = useState("");
  const [point_value, setPoint_Value] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newWizardData = {
      name,
      img_url,
      house_name,
      traits,
    };
    // console.log(newWizardData);

    fetch("http://localhost:9292/wizards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newWizardData),
    })
      .then((res) => res.json())
      .then((newWizard) => handleAddNewWizard(newWizard)); // update state
      // clear form
      setWizard_Name("");
      setImg_Url("");
      setHouse_Name("");
      setTraits("");
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
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="category">Join A House</label>
          <input
            type="text"
            id="category"
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
            value={description}
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
          <label htmlFor="new-spell-point-value">Spell Point Value</label>
          <input
            type="text"
            id="new-spell-point-value"
            placeholder="Enter Spell Point Value"
            value={point_value}
            onChange={(e) => setPoint_Value(e.target.value)}
          />
        </div>
        <br />
        <label htmlFor="submit">Create New Wizard</label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default WizardForm;


// ASSIGN A SPELL TO A WIZARD FORM IDEA
// import {useParams} from 'react-router-dom';

// const Wizard = () => {
  // const [wizard, setWizard] = useState({
  //   spells: []
  // })

//   const [spellForm, setSpellForm] = useState(false)

// const params = useParams();
// useEffect(() => {
//   fetch(`http://locallhost:9292/owners/${params.id}`)
//   .then(res => res.json())
//   .then (data => {
//     console.log(data)
//   })
// }, [])

// return (
//   <div>
//     <h3>I am your wizard!</h3>
//   </div>
// )
// }