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
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";

class ProfileEditModal extends Component {
  state = {
    modal: false,
    mtElbert: "",
    mtMassive: "",
    mtHarvard: "",
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  toggle = () => {
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
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Update Peaks
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Peaks</ModalHeader>
          <ModalBody>
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Mt. Elbert</Label>
                <Input
                  type="checkbox"
                  name="mtElbert"
                  id="mtElbert"
                  onChange={this.onChange}
                />
                <br />
                <Label for="item">Mt. Massive</Label>
                <Input
                  type="checkbox"
                  name="mtMassive"
                  id="mtMassive"
                  onChange={this.onChange}
                />
                <br />
                <Label for="item">Mt. Harvard</Label>
                <Input
                  type="checkbox"
                  name="mtHarvard"
                  id="mtHarvard"
                  onChange={this.onChange}
                />
                <br />

                <Button color="primary" style={{ marginTop: "2rem" }} block>
                  Save
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
  { clearErrors }
)(ProfileEditModal);
