import React from "react";
import AnimalsList from "./Animals/AnimalsList";
import Home from "./Home";
import About from "./components/About";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Main = (props) => {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/animals">
              <AnimalsList query={props.query} />
            </Route>
            <Route path="/about" exact component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Main;
