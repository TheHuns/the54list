import React, { Component } from "react";
import { Container } from "reactstrap";

// Import Components
import PeakList from "./PeakList";
import TopUserList from "./TopUserList";

export default class Home extends Component {
   render() {
      return (
         <Container className="home-container">
            <PeakList />
            <TopUserList />
         </Container>
      );
   }
}
