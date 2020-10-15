import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetail";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Welcome} />
        <Route path="/recipes" exact component={Recipes} />
        <Route path="/recipes/:id" component={RecipeDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
