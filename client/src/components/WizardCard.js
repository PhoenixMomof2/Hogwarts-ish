import React from 'react';
import { useHistory } from 'react-router-dom';

const WizardCard = ({wizard, handleDeleteWizard, spells}) => {
  // handleEditWizard
  
  const history = useHistory();
  
  const handleCardClick = (id) => {
    history.push(`/wizards/${id}`);
  }

  const handleDeleteWizardClick = (id) => {
    fetch(`http://localhost:9292/wizards/${id}`, {
    method: "DELETE", 
    }).then(() => {
      handleDeleteWizard(id);
      history.push(`/wizards`);
    // console.log("Deleted")
    })
  }

  const handleEditWizardClick = (id) => {
      history.push(`/wizards/${id}/edit`);
    }

    return (
      <React.Fragment>
        <div className="wizard-card" key={wizard.id} onClick={() => {handleCardClick(wizard.id)}}>
          <p className="wizard-name">{wizard.wizard_name}</p>
          <p className="wizard-house">House: {wizard.house_name}</p>
          <img
            src={wizard.img_url}
            alt={wizard.wizard_name}
            className="wizard-image"
          />
          <p><b>Traits:</b> {wizard.traits}</p>
        </div>
        <div className="button-container">
          <button className="edit-btn" onClick={() => {handleEditWizardClick(wizard.id)}}>Edit Wizard Image</button>
          <button className="del-btn" onClick={() => {handleDeleteWizardClick(wizard.id)}}>Delete</button>
        </div>
      </React.Fragment>
    );
};

export default WizardCard;
