import React, { Component, Fragment } from "react";
import {
  Container,
  Card,
  CardTitle,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";
import { connect } from "react-redux";

class UserProfile extends Component {
  state = {
    bio: "Some stuff about this guy"
  };

  render() {
    const { name, totalPeaks, isAuthenticated } = this.props.user;

    const editButton = (
      <Fragment>
        <Button href="#">Edit Profile</Button>
      </Fragment>
    );

    const imgStyle = {
      height: "200px",
      width: "200px"
    };

    return (
      <Container className="mt-4 p-4">
        <Card className="pl-5">
          <CardImg
            style={imgStyle}
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHkAeQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYCAwQBB//EADcQAAIBAwEECAMFCQAAAAAAAAABAgMEEQUhMVFxEhMiQUJSkbEUYZIjMmKB0RUzNDVygqHh8f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAABHXmq06LcKP2k1v4I06vfuLdvReH45L2IcDqrahdVW81XFcI7DT19bOetqZ/qZrAHTSv7qk+zWk1wltRJ2erQqNQuEqcn4lu/0QYAt2cnpB6TfOE1b1nmDeIN9z4cicAAAAAAAAAGm7rKhbVKvlWzmbiN12TjaRS8VRJ+jAg5Nyk23lt5bPAAAAAAAAWbTq/xFpCcnmS2S5orJM6BPMK0ODT9f+ASwAAAAAAABG67Fu0i14aib9GSRovKHxFtUp97Wzn3AVcBpp4aw1vyAAAAAAATGgRfRrS4tL0z+pDlk0yg6FnCMtkpdqXNgdYAAAAAAAAAAhdYsmpO4pLKf30u75kUW4jLzSY1G527UJeV7n+gEIDfVs7mk+3RnjjFZX+DT0ZeV+gHgN1K1uKrXV0ZvPfjC9WSVpo6i1O5af4Fu/MDRpNk61RVqqxTjtX4mTx4kopJLCXA9AAAAAAAAYHkpKKbk0ktrbIa81eTbha7F52t/I06pfO4m6VN/ZRf1M4AOy11KvQnmcnVi3lqT9mTNtf29wl0ZqMn4ZbGVoAW7YelVp3Nelsp1ppcMm39pXeP3z+lAWQ0XF7Qt89ZUXS8q2sr1S7uKn3602ueDSB33eqVqzxSbpQT7ntZvs9XkmoXW1edL3IkAW2MlKKlFpp7U0ZFf0u+dvNU6jfVSf0ssCedwAAACO1m66qh1UH26m/5LvJErGoVviLuc85in0Y8kBzgAAAAAAAAAAAABO6NddbRdGb7dPd80QRvsa/w91Tn3Zw+TAtAAA03lTqrWrNb1F459xViyar/AAFX8vdFcA8BkAMQZADEGQAxBkAMQZADEGQAs1jUdW0pTe9x28zecekfy+l/d7s7AP/Z"
            alt="Avatar Image"
          />
          <CardBody>
            <CardTitle>
              <strong>Name: </strong>
              {name}
            </CardTitle>
            <CardSubtitle>
              <strong>Peaks bagged: </strong> {totalPeaks}
            </CardSubtitle>
            <CardText>Bio:{this.state.bio}</CardText>
            {isAuthenticated ? editButton : null}
          </CardBody>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  error: state.error
});

export default connect(mapStateToProps)(UserProfile);
