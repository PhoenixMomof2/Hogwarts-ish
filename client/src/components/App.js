import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import WizardCard from "./WizardCard";
import SpellList from "./SpellList";

const App = () => {
  const [wizards, setWizards] = useState([]);
  // const [newWizardForm, setNewWizardForm] = useState(false)

  useEffect(() => {
    console.log("Inside useEffect")
    fetch("http://localhost:9292/wizards")
      .then((res) => res.json())
      .then((wizards) => setWizards(wizards));
  }, []);

  const [spells, setSpells] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect")
    fetch("http://localhost:9292/spells")
      .then((res) => res.json())
      .then((spells) => setSpells(spells));
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/wizards">
          <WizardCard wizards={wizards}/>
        </Route>
        <Route exact path="/spells">
          <SpellList spells={spells} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;