import React, { Component } from "react";
import { Route, BrowserRouter, Redirect } from "react-router-dom";

// Import components
import MainNav from "./components/MainNav";
import Home from "./components/Home";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <MainNav />
            <Route exact path="/" component={Home} />
         </BrowserRouter>
      );
   }
}

export default App;
