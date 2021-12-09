import React from "react";
import { Switch, Route } from "react-router-dom";
import { animals } from "./animals";
import AnimalCard from "./AnimalCard";
import AnimalDetail from "./AnimalDetail";
import NoAnimalsFound from "./NoAnimalsFound";

const AnimalsList = (props) => {
  let results = animals
    .filter((animal) =>
      animal.name.toLowerCase().includes(props.query.toLowerCase())
    )
    .map((animal) => (
      <AnimalCard key={animal.name} name={animal.name} url={props.match.url} />
    ));
  return (
    <>
      <Switch>
        <Route exact path={props.match.path}>
          {results.length > 0 ? results : <NoAnimalsFound />}
        </Route>
        <Route path={`${props.match.path}/:animal`}>
          <AnimalDetail />
        </Route>
      </Switch>
    </>
  );
};

export default AnimalsList;
