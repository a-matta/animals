import React from "react";
import AnimalsList from "./Animals/AnimalsList";
import Home from "./Home";
import About from "./components/About";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const Main = ({ query }) => {
  return (
    <div className="container">
      <div className="row">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/animals"
              render={(props) => <AnimalsList {...props} query={query} />}
            />
            <Route path="/about" exact component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Main;
