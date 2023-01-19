import React from 'react';
import { useParams } from 'react-router-dom';

const WizardDetails = ({wizard}) => {
  const { id } = useParams();
  //  const {id, wizard_name, house_name, img_url, traits} = wizard
  
  return (
    <div className="wizard-details" key={id}>
      <h2>Wizard Details</h2>
       <div className="wizard-card">
          <p className="wizard-name">Name: {wizard.wizard_name}</p>
          <p className="wizard-house">House: {wizard.house_name}</p>
          <img
            src={wizard.img_url}
            alt={wizard.wizard_name}
            className="wizard-image"
          />
          <p><b>Traits:</b> {wizard.traits}</p>
      </div>
    </div>
  )
};

export default WizardDetails



















