import React, { Component } from "react";
import { ListGroup, ListGroupItem, Button, Container } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";

class TopUserList extends Component {
  static propTypes = {
    getUsers: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <Container className="top-user-list">
        <h3>Top Users</h3>
        {users.map(({ name, totalPeaks, _id }) => (
          <ListGroup key={_id}>
            <ListGroupItem className="user-card">
              <h5>{name}</h5>
              <p>Peaks climbed: {totalPeaks}</p>
              <Button color="success">Profile</Button>
            </ListGroupItem>
          </ListGroup>
        ))}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  users: state.user.users
});

export default connect(
  mapStateToProps,
  { getUsers }
)(TopUserList);
