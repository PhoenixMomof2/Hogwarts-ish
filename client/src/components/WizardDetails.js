import React from 'react';
import { useParams } from 'react-router-dom';

const WizardDetails = ({wizards}) => {
  const { id } = useParams() 
  const wiz = wizards.find(wizard => wizard.id === parseInt(id)) 
  
  return (
    <div>
      <br/>
       <div className="wizard-card" key={wiz.id}>
          <p className="wizard-name">Name: {wiz.wizard_name}</p>
          <p className="wizard-house">House: {wiz.house_name}</p>
          <img
            src={wiz.img_url}
            alt={wiz.wizard_name}
            className="wizard-image"
          />
          <p><b>Traits:</b> {wiz.traits}</p>
      </div>
    </div>
  )
};

export default WizardDetails



















