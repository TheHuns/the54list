import React, { Component } from "react";

// Import components
import MainNav from "./components/MainNav";
import Home from "./components/Home";

// Redux
import store from "./store";
import { Provider } from "react-redux";
import { loadUser } from "./actions/userActions";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <MainNav />
        <Home />
      </Provider>
    );
  }
}

export default App;
