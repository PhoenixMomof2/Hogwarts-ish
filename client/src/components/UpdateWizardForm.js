import React, {useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'

const UpdateWizardForm = ({handleEditWizard}) => {
  
  const [update_wizard_name, setUpdate_Wizard_Name] = useState("");
  const [update_house_name, setUpdate_House_Name] = useState("");
  const [update_img_url, setUpdate_Img_Url] = useState("");
  const [update_traits, setUpdate_Traits] = useState("");
  const { id } = useParams();
  console.log(id)
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateWizardData = {
      wizard_name: update_wizard_name,
      house_name: update_house_name,
      img_url: update_img_url,
      traits: update_traits,
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
          .then(() => {
            handleEditWizard(id);
          })
          history.push('./wizards')
          // clear form
          setUpdate_Wizard_Name("");
          setUpdate_House_Name("");
          setUpdate_Img_Url("");
          setUpdate_Traits("");
  };
    
return (
    <div>
      <div className="update-form-container">
        <h3>Update a wizard!</h3>
          <form className="update-wizard-form" onSubmit={handleSubmit}>
          <div>
          <label htmlFor="update-wizard-name">Wizard Name   </label>
          <input
            type="text"
            id="update-wizard-name"
            placeholder="Enter Wizard Name"
            value={update_wizard_name}
            onChange={(e) => setUpdate_Wizard_Name(e.target.value)}
          />
          </div>
          <br />
          <div>
          <label htmlFor="update-assign-house">   Join A House   </label>
          <select
            type="text"
            id="update-assign-house"
            value={update_house_name}
            onChange={(e) => setUpdate_House_Name(e.target.value)}
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
            value={update_img_url}
            onChange={(e) => setUpdate_Img_Url(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="update-traits">   New Wizard Traits   </label>
          <input
            type="text"
            id="update-traits"
            placeholder="Enter New Wizard Traits"
            value={update_traits}
            onChange={(e) => setUpdate_Traits(e.target.value)}
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