import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
// import WizardCard from "./WizardCard";
import WizardList from "./WizardList";
import WizardForm from "./WizardForm"
import SpellList from "./SpellList";

const App = () => {
  const [wizards, setWizards] = useState([]);
  const [spells, setSpells] = useState([]);
  
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

  function handleAddNewWizard(newWizard) {
    setWizards([...wizards, newWizard]); // Updating wizards state.
  }

  function handleAddNewSpell(newSpell) {
    setSpells([...spells, newSpell]); // Updating spells state.
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/wizards">
          <WizardList wizards={wizards} />
        </Route>
        {/* <Route exact path="/wizards/:id">
          <WizardCard wizards={wizards} handleEditWizard={handleEditWizard} handleEditSpell={handleEditSpell} />
        </Route> */}
        <Route exact path="/spells">
          {/* <SpellList spells={spells} handleEditSpell={handleEditSpell} handleDeleteSpell={handleDeleteSpell}/> */}
          <SpellList spells={spells} />
        </Route>
        <Route exact path="/wizards/new"> 
          <WizardForm handleAddNewWizard={handleAddNewWizard} handleAddNewSpell={handleAddNewSpell} />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;