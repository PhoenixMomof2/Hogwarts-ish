import React from 'react'

const WizardCard = ({wizard: {id, wizard_name, img_url, house_name, traits}}) => {

  // CREATE A DELETE REQUEST FORMATTED SIMILAR TO THE POST SO IT INCLUDED THE SPELLS FOR DELETION AS WELL
  const handleDeleteWizard = () => {
    fetch(`http://localhost:9292/wizards/${id}`, {
    method: "DELETE",
    })
    .then(console.log("Wizard Deleted"), window.load('http://localhost:3000/wizards'))
  }
    
    return (
      
          <div key={id}>
            <h2>{wizard_name}</h2>
            <h3>House: {house_name}</h3>
            <img
              src={img_url}
              alt={wizard_name}
              className="wizard-image"
            />
            <p className="wizard-card">Traits: {traits}</p>
            <div className="btn-group">
              <button className="edit-btn" >Edit</button>
              <button className="del-btn" onClick={handleDeleteWizard}>Delete</button>
            </div>
          </div>
      
    );
};

export default WizardCard;  
