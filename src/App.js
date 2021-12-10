import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    query: "",
  };

  onQueryChange = (value) => {
    this.setState({ query: value });
  };
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Header
              query={this.state.query}
              onQueryChange={this.onQueryChange}
            />
            <Main query={this.state.query} />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
