import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import WizardList from "./WizardList";
import WizardItem from "./WizardItem";
import SpellList from "./SpellList";
import SpellItem from "./SpellItem";

const App = () => {
  const [spells, setSpells] = useState([]);
  const [wizards, setWizards] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect")
    fetch("http://localhost:9292/spells")
      .then((r) => r.json())
      .then((spells) => setSpells(spells));
  }, []);

  useEffect(() => {
    console.log("Inside useEffect")
    fetch("http://localhost:9292/wizards")
      .then((r) => r.json())
      .then((wizards) => setWizards(wizards));
  }, []);

  return (
    <div>
      <Header />
      <br />
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/wizards">
          <WizardList wizards={wizards} />
        </Route>
        <Route path="/wizards/:id">
          <WizardItem wizard={wizard} />
        </Route>
        <Route path="/spells">
          <SpellList spells={spells} />
        </Route>
        <Route path="/spells/:id">
          <SpellItem spells={spells} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;