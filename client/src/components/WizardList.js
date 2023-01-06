import React from 'react'
import WizardCard from './WizardCard';

const WizardList = ({wizards}) => {
  console.log("WizardList is rendering.....sort of?")

  return (
    <div className="wizard-list">
      <ul>
        {wizards.map((wizard) => (
          <div key={wizard.id}>
            <li>
              <WizardCard wizard={wizard}/>
           </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WizardList;