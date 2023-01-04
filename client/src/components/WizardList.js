import React from 'react'
import WizardItem from './WizardItem'

const WizardList = ({wizards}) => {
  return (
    <div className="wizard-list">
      <br/>
      <ul className="wizard-cards">
        {wizards.map((wizard) => (
          <WizardItem key={wizard.id} wizard={wizard} />
        ))}
      </ul>
    </div>
  );
};

export default WizardList;