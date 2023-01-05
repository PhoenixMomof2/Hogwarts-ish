import React, {useEffect, useState} from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import WizardList from "./WizardList";
import WizardItem from "./WizardItem";
import SpellList from "./SpellList";

const App = () => {
  const [wizards, setWizards] = useState([]);

  useEffect(() => {
    console.log("Inside useEffect")
    fetch("http://localhost:9292/wizards")
      .then((res) => res.json())
      .then((wizards) => setWizards(wizards));
  }, []);

  // const [spells, setSpells] = useState([]);
  
  // useEffect(() => {
  //   console.log("Inside useEffect")
  //   fetch("http://localhost:9292/spells")
  //     .then((res) => res.json())
  //     .then((spells) => setSpells(spells));
  // }, []);

  // useEffect(() => {
  //   console.log("Inside useEffect")
  //   fetch("http://localhost:9292/wizards/:id")
  //     .then((res) => res.json())
  //     .then((wizards) => setWizards(wizards));
  // }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/wizards">
          <WizardList wizards={wizards} />
        </Route>
        <Route exact path="/wizards/:id">
          {/* <WizardItem wizard={wizards.id} /> */}
        </Route>
        {/* <Route path="/spells">
          <SpellList spells={spells} />
        </Route> */}
      </Switch>
    </div>
  );
};

export default App;