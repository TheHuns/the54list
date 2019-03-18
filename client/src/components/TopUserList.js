import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";

export default class TopUserList extends Component {
   state = {
      users: [
         {
            name: "Dehn",
            totalPeaks: 1,
            dateJoined: "",
            peaksClimbed: [],
            toDoList: []
         },
         {
            name: "Lynette",
            totalPeaks: 25,
            dateJoined: "",
            peaksClimbed: [],
            toDoList: []
         },
         {
            name: "Brody",
            totalPeaks: 54,
            dateJoined: "",
            peaksClimbed: [],
            toDoList: []
         }
      ]
   };

   render() {
      const { users } = this.state;
      return (
         <Container className="top-user-list">
            <h3>Top Users:</h3>
            {users.map(({ name, totalPeaks }) => (
               <ListGroup>
                  <ListGroupItem className="user-card">
                     <h5>{name}</h5>
                     <p>Peaks Climbed: {totalPeaks}</p>
                     <Button color="success">Profile</Button>
                  </ListGroupItem>
               </ListGroup>
            ))}
         </Container>
      );
   }
}
