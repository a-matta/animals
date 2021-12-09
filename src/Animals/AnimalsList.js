import React from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";
import { Switch, Route } from "react-router-dom";
import AnimalDetail from "./AnimalDetail";

const AnimalsList = (props) => {
  console.log(props);
  let filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(props.query.toLowerCase())
  );
  return (
    <>
      <Switch>
        <Route exact path={props.match.path}>
          {filteredAnimals.map((item) => (
            <AnimalsCard key={item.name} name={item.name} />
          ))}
        </Route>
        <Route path={`${props.match.path}/:animal`}>
          <AnimalDetail />
        </Route>
      </Switch>
    </>
  );
};

export default AnimalsList;
