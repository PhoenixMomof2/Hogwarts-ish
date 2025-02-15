import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import WizardList from "./WizardList";
import WizardForm from "./WizardForm"
import SpellList from "./SpellList";
import WizardDetails from "./WizardDetails"
import UpdateWizardForm from "./UpdateWizardForm";

const App = () => {
  const [wizards, setWizards] = useState([]);
  const [spells, setSpells] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  
  // GET REQUEST
  useEffect(() => {
    console.log("Fetch all wizards!")
    fetch("http://localhost:9292/wizards")
      .then((res) => res.json())
      .then((wizards) => setWizards(wizards));
  }, []);

  useEffect(() => {
    console.log("Fetch all spells!")
    fetch("http://localhost:9292/spells")
      .then((res) => res.json())
      .then((spells) => setSpells(spells));
  }, []);

  // Updating wizards state with new wizard.
  const handleAddNewWizard = (newWizard) => {
    setWizards([...wizards, newWizard]); 
  }

  // Updating spells state with new spell.
  const handleAddNewSpell = (newSpell) => {
    setSpells([...spells, newSpell]); 
  }

   // // Updating wizards state to delete wizard.
   const handleDeleteWizard = (id) => {
    const deletedWizard = wizards.filter(wizard => wizard.id !== id);
    setWizards(deletedWizard);
  }

  // Updating wizards state to update wizard.
  const handleEditWizard = (updatedWizard) => {
    const updatedWizards = wizards.map((wizard) => (wizard.id === updatedWizard.id ? updatedWizard : wizard))
    setWizards(updatedWizards);
  }

  return (
    <div className="main">
      <NavBar />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/wizards/new"> 
            <WizardForm handleAddNewWizard={handleAddNewWizard} handleAddNewSpell={handleAddNewSpell} />
          </Route>
          <Route exact path="/wizards">
            <WizardList wizards={wizards} spells={spells} handleEditWizard={handleEditWizard} handleDeleteWizard={handleDeleteWizard}/>
          </Route>
          <Route exact path="/wizards/:id">
              <WizardDetails wizards={wizards} spells={spells}/>
          </Route>
          <Route exact path="/wizards/:id/edit">
            <UpdateWizardForm wizards={wizards} handleEditWizard={handleEditWizard}/>
          </Route>
          <Route exact path="/spells">
            <SpellList spells={spells} />
          </Route>
        </Switch>
    </div>
  );
};

export default App;