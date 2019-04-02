import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  NavLink
} from "reactstrap";
import { connect } from "react-redux";
import { login } from "../actions/userActions";
import { clearErrors } from "../actions/errorActions";
import { Redirect } from "react-router-dom";

class LoginModal extends Component {
  state = {
    modal: false,
    name: "",
    username: "",
    password: "",
    msg: null
  };

  componentDidUpdate(prevProps) {
    const { error, isAuthenticated } = this.props;
    if (error !== prevProps.error) {
      // Check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }

    // IF register success close modal
    if (this.state.modal) {
      if (isAuthenticated) {
        this.toggle();
        return <Redirect to="/profile" />;
      }
    }
  }

  toggle = () => {
    this.props.clearErrors();
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const { username, password } = this.state;

    const user = {
      username,
      password
    };
    // Attempt login
    this.props.login(user);
  };

  render() {
    return (
      <div>
        <NavLink color="light" onClick={this.toggle}>
          Login
        </NavLink>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  onChange={this.onChange}
                />
                <br />
                <Label for="item">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={this.onChange}
                />
                <Button color="primary" style={{ marginTop: "2rem" }} block>
                  Login
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { login, clearErrors }
)(LoginModal);
