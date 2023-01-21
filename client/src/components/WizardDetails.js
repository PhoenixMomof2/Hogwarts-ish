import React from 'react';
import { useParams } from 'react-router-dom';


const WizardDetails = ({wizards, spells}) => {
  
  const { id } = useParams() 
  // eslint-disable-next-line
  const wiz = wizards.find(wizard => wizard.id === parseInt(id)) 
  const wiz_spells = spells.filter(spell => spell.wizard_id === wiz.id)

  return (
      <div>
      <br/>
        <div className="wizard-detail-card" key={wiz.id}>
            <p className="wizard-name">{wiz.wizard_name}</p>
            <p className="wizard-house">House: {wiz.house_name}</p>
            <img
              src={wiz.img_url}
              alt={wiz.wizard_name}
              className="wizard-image"
            />
            <p><b>Traits:</b> {wiz.traits}</p>
              {wiz_spells.map(spell => (
              <div key={spell.id}>
                <h2>Spell: {spell.spell_name}</h2>
                <p>Impact: {spell.spell_impact}</p>
                <p>Points: {spell.point_value}</p>
              </div>
              ))}
          </div>
      </div>
  )
};

export default WizardDetails



















