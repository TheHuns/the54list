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
  Alert
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { clearErrors } from "../actions/errorActions";
import { updateUser } from "../actions/userActions";

class ProfileEditModal extends Component {
  state = {
    modal: false,
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
    const { username } = this.props.user;

    // create array of peaks from the state
    let peakList = Object.keys(this.state);
    peakList = peakList.slice(2);

    // attempt to save to db
    this.props.updateUser(username, peakList);

    this.toggle();
  };

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>
          Update Peaks
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Update Peaks</ModalHeader>
          <ModalBody className="p-3" id="edit-modal">
            {this.state.msg ? (
              <Alert color="danger">{this.state.msg}</Alert>
            ) : null}
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Input
                  type="checkbox"
                  name="mtElbert"
                  id="mtElbert"
                  onChange={this.onChange}
                />
                <Label for="mtElbert">Mt. Elbert</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  name="mtMassive"
                  id="mtMassive"
                  onChange={this.onChange}
                />
                <Label for="item">Mt. Massive</Label>
              </FormGroup>
              <FormGroup>
                <Input
                  type="checkbox"
                  name="mtHarvard"
                  id="mtHarvard"
                  onChange={this.onChange}
                />
                <Label for="item">Mt. Harvard</Label>

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
  user: state.user.user,
  isAuthenticated: state.user.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { clearErrors, updateUser }
)(ProfileEditModal);
