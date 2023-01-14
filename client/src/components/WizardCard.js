import React from 'react'

const WizardCard = ({wizards}) => {

  // function handleEditWizard (editedWizard) {

  //   const editedWizard = wizards.map((wizard) => {
  //     if (wizard.id === editedWizard.id) {
  //       return editedWizard;
  //     } else {
  //       return wizard;
  //     }
  //   });
  //   setWizards(editedWizard);
  // }
  // fetch(`http://localhost:9292/wizards/${wizard.id}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     editedWizardData
  //   }),
  // })
  //   .then((res) => res.json())
  //   .then((editSpell) => {
  //     handleEditSpell(editSpell)
  //     const editedSpellData = {
  //       spell_name,
  //       spell_impact,
  //       point_value,
  //       wizard_id: editedWizard.id,
  //     }
  //     // create key value pair so new data can go to schema correctly
  //     console.log(editedSpellData);
  //     fetch(`http://localhost:9292/spells/${spell.id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newSpellData),
  //     })
  //       .then((res) => res.json())
  //       .then((editedSpell) => handleEditSpell(editedSpell)); // update state
  //     });
    
    return (
      <div>
        <h1>The Wizards of Hogwarts-Ish</h1>
          {wizards.map((wizard) => (
          <div className="wizard-card" key={wizard.id}>
            <h2>{wizard.name}</h2>
            <h3>House: {wizard.house}</h3>
            <img
              src={wizard.img_url}
              alt={wizard.name}
              className="wizard-image"
            />
            <p>Traits: {wizard.traits}</p>
            {/* Add a conditional statement so spells are only seen when button is clicked. */}
            <button className="edit-btn">Edit</button>
            <button className="del-btn">Delete</button>
            <button className="spell-btn">Spells</button>
            {/* <button className="edit-btn" onClick={handleEditWizard}>Edit</button>
            <button className="del-btn" onClick={handleDeleteWizard}>Delete</button>
            <button className="spell-btn" onClick={handleShowHideSpells}>Spells</button> */}
          </div>
          ))}
      </div>
    );
};

export default WizardCard;  
