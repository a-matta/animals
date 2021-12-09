import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

class App extends Component {
  state = {
    query: "",
  };

  onQueryChange = (value) => {
    this.setState({ query: value });
  };
  render() {
    return (
      <>
        <Header onQueryChange={this.onQueryChange} />
        <Main query={this.state.query} />
        <Footer />
      </>
    );
  }
}

export default App;
