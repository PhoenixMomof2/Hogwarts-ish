import React from 'react'

const WizardCard = ({wizards}) => {

  return (
    <div className="spell-list">
      <h2>Wizard Card</h2>
      {wizards.map((wizard) => (
        <div key={wizard.id}>
          <h3>{wizard.name}</h3>
          <img src={wizard.img_url} alt={wizard.name} 
          className="wizard-image"
          />
          <h4>House: {wizard.house_name}</h4>
          <p>Traits: {wizard.traits}</p>
        </div>
      ))}
    </div>
  );
};

export default WizardCard;

// ASSIGN A SPELL TO A WIZARD FORM IDEA
// import {useParams} from 'react-router-dom';

// const Wizard = () => {
  // const [wizard, setWizard] = useState({
  //   spells: []
  // })

//   const [spellForm, setSpellForm] = useState(false)

// const params = useParams();
// useEffect(() => {
//   fetch(`http://locallhost:9292/owners/${params.id}`)
//   .then(res => res.json())
//   .then (data => {
//     console.log(data)
//   })
// }, [])

// return (
//   <div>
//     <h3>I am your wizard!</h3>
//   </div>
// )
// }
