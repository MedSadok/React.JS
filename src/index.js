import React, { Component } from "react";
import ReactDOM from "react-dom";
import MovieList from "./MovieList";

import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.Loading();
  }

  Loading = () => {
    setTimeout(() => {
      this.setState({
        loading: false
      });
    }, 3000);
  };

  render() {
    return (
      <div className="App">
        <MovieList Loading={this.state.loading} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
