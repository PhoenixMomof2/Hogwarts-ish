import React from 'react'

const WizardCard = ({wizards}) => {

  return (
    <div className="responsive">
      <h2>The Wizards of Hogwarts</h2>
      {wizards.map((wizard) => (
        <div className="gallery" key={wizard.id}>
          <h3>{wizard.name}</h3>
          <img src={wizard.img_url} alt={wizard.name} 
          className="wizard-image"
          />
          <h4 className="desc">House: {wizard.house_name}</h4>
          <p className="desc">Traits: {wizard.traits}</p>
        </div>
      ))}
    </div>
  );
};

export default WizardCard;


