import React from 'react'
import WizardCard from './WizardCard'

function WizardList({wizards}) {
  return (
    <div className="wizard-list">
      <br/>
      <br/>
      <ul className="wizard-cards">
        {wizards.map((wizard) => (
          <WizardCard key={wizard.id} wizard={wizard} />
        ))}
      </ul>
    </div>
  )
}

export default WizardList;

