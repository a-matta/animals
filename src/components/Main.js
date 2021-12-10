import React from "react";
import AnimalsList from "../Animals/AnimalsList";
import Home from "./components/Home";
import About from "./components/About";
import { Switch, Route } from "react-router-dom";

const Main = ({ query }) => {
  return (
    <div className="container">
      <div className="row">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/animals"
            render={(props) => <AnimalsList {...props} query={query} />}
          />
          <Route path="/about" exact component={About} />
        </Switch>
      </div>
    </div>
  );
};

export default Main;
