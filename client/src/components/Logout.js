import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { logout } from "../actions/userActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Logout extends Component {
  static propTypes = {
    logout: PropTypes.func.isRequired
  };

  render() {
    return (
      <React.Fragment>
        <NavLink
          onClick={this.props.logout}
          href="#"
          style={{ marginTop: "0" }}
        >
          Logout
        </NavLink>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { logout }
)(Logout);
