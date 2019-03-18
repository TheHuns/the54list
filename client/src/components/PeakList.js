import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";

export default class PeakList extends Component {
   state = {
      peaks: [
         {
            name: "Handies Peak",
            elev: "14,050",
            rank: 50,
            imgUrl:
               "https://i.pinimg.com/originals/bb/f9/9f/bbf99f5208382128ad41da4c32758801.jpg"
         },
         {
            name: "Mount Wilson",
            elev: "14,100",
            rank: 25,
            imgUrl:
               "https://www.wildernessshots.com/wp-content/uploads/2017/10/Mt-Wilson-Fall-Colors-Sunrise-Colorado.jpg"
         },
         {
            name: "Mt. Eolus",
            elev: "14,75",
            rank: 48,
            imgUrl:
               "https://images.fineartamerica.com/images-medium-large-5/colorado-14er-mt-eolus-and-the-sidewalk-in-the-sky-aaron-spong.jpg"
         },
         {
            name: "Handies Peak",
            elev: "14,050",
            rank: 50,
            imgUrl:
               "https://i.pinimg.com/originals/bb/f9/9f/bbf99f5208382128ad41da4c32758801.jpg"
         },
         {
            name: "Mount Wilson",
            elev: "14,100",
            rank: 25,
            imgUrl:
               "https://www.wildernessshots.com/wp-content/uploads/2017/10/Mt-Wilson-Fall-Colors-Sunrise-Colorado.jpg"
         },
         {
            name: "Mt. Eolus",
            elev: "14,75",
            rank: 48,
            imgUrl:
               "https://images.fineartamerica.com/images-medium-large-5/colorado-14er-mt-eolus-and-the-sidewalk-in-the-sky-aaron-spong.jpg"
         }
      ]
   };

   render() {
      const { peaks } = this.state;
      return (
         <Container className="peak-list-container">
            <h2>The Peaks</h2>
            {peaks.map(({ name, elev, rank, imgUrl }) => (
               <ListGroup>
                  <ListGroupItem className="peak-card">
                     <img width="100px" src={imgUrl} alt={name} />
                     <h3>{name}</h3>
                     <p>Rank: {rank}</p>
                     <p>Elevation: {elev}</p>
                     <Button color="primary">More Info</Button>
                  </ListGroupItem>
               </ListGroup>
            ))}
         </Container>
      );
   }
}
