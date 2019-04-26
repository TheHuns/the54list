import React, { Component } from "react";
import { Container, Card, CardTitle, CardBody, CardImg } from "reactstrap";

export default class ProfilePeakCard extends Component {
  render() {
    const peak = this.props.peak;

    return (
      <Container
        style={{ width: "20%", display: "inline-block" }}
        className="mb-4"
      >
        <Card className="text-center">
          <CardImg
            style={{ height: "50px", width: "50px" }}
            src="data:image/jpeg;base64,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"
          />
          <CardBody>
            <CardTitle>
              <strong>{peak}</strong>
            </CardTitle>
          </CardBody>
        </Card>
      </Container>
    );
  }
}
