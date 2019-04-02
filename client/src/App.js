import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

// Import components
import MainNav from "./components/MainNav";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";

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
        <BrowserRouter>
          <MainNav />

          <Route exact path="/" component={Home} />
          <Route path="/profile" component={UserProfile} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
