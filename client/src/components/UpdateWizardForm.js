import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const UpdateWizardForm = ({wizards, handleEditWizard}) => {
  
  const history = useHistory();
  const { id } = useParams();
  const wiz = wizards.find(wizard => wizard.id === parseInt(id)) 
 
  const [wizard_name, setWizard_Name] = useState("")
  const [house_name, setHouse_Name] = useState("");
  const [img_url, setImg_Url] = useState("");
  const [traits, setTraits] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateWizardData = {
      wizard_name,
      house_name,
      img_url,
      traits,
    };
    console.log(updateWizardData);

    //UPDATE (PATCH REQUEST)
    fetch(`http://localhost:9292/wizards/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateWizardData),
        })
          .then((res) => res.json())
          .then((data) => {
            handleEditWizard(data);
            history.push(`/wizards/${id}`);
          })
          
          //clear form
          setWizard_Name("");
          setHouse_Name("");
          setImg_Url("");
          setTraits("");
        }
  
    
return (
    <div>
      <div className="update-form-container">
        <h2>Update a wizard!</h2>
          <form className="update-wizard-form" onSubmit={handleSubmit}>
          <div>
          <label htmlFor="update-wizard-name">Wizard Name   </label>
          <input
            type="text"
            id="wizard-name"
            placeholder="Enter Wizard Name"
            defaultValue={wiz.wizard_name}
            onChange={(e) => setWizard_Name(e.target.value)}
          />
          </div>
          <br />
          <div>
          <label htmlFor="update-assign-house">   Join A House   </label>
          <select
            type="text"
            id="update-assign-house"
            defaultValue={wiz.house_name}
            onChange={(e) => setHouse_Name(e.target.value)}
            >
            <option house_name="Gryffindor">   Gryffindor</option>
            <option house_name="Hufflepuff">   Hufflepuff</option>
            <option house_name="Ravenclaw">   Ravenclaw</option>
            <option house_name="Slytherin">   Slytherin</option>
          </select>
          </div>
          <br />
          <div>
          <label htmlFor="update_img_url">   New Wizard Image Source   </label>
          <input
            type="text"
            id="update-img_url"
            placeholder="Enter Image Source"
            defaultValue={wiz.img_url}
            onChange={(e) => setImg_Url(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="update-traits">   New Wizard Traits   </label>
          <input
            type="text"
            id="update-traits"
            placeholder="Enter New Wizard Traits"
            defaultValue={wiz.traits}
            onChange={(e) => setTraits(e.target.value)}
          />
        </div>
          <br />
          <input
            type="submit"
            name="submit"
            value="Submit"              
            className="submit"
          />
          </form>
      </div>
    </div>
  );
};

export default UpdateWizardForm;