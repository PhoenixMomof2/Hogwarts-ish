import React from 'react'
import WizardCard from './WizardCard'

function WizardList({wizards, handleEditWizard, handleDeleteWizard }) {

  return (
    // history.push(`/wizards/${id}`)
    <div>
      <br/>
        {wizards.map((wizard) => (
        <div key={wizard.id}>
          <br/>
            <WizardCard key={wizard.id} wizard={wizard} handleDeleteWizard={handleDeleteWizard} handleEditWizard={handleEditWizard}/>
          <br/>
        </div>
        ))}
    </div>
  )
};
export default WizardList;

