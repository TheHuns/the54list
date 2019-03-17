import React, { Component } from "react";

// Import components
import MainNav from "./components/MainNav";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
   render() {
      return (
         <React.Fragment>
            <MainNav />
            <h3>The54list</h3>
         </React.Fragment>
      );
   }
}

export default App;
