import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

const App = () => {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    // console.log("Using useEffect");
    fetch("http://localhost:9292/spells")
      .then((res) => res.json())
      .then((spells) => setSpells(spells));
  }, []);

  // function handleAddNewSpell(newSpell) {
  //   setSpells([...spells, newSpell]); // Updating foods state.
  // }
  return (
    <div>
      <Header />
      <br />
      <NavBar />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/spells">
          <SpellList foods={foods} />
        </Route>
        <Route exact path="/newFoods">
          <FoodForm handleAddNewFood={handleAddNewFood} />
        </Route>
      </Switch>
    </div>
  );
};