import React, { Component } from "react";
import {
   Button,
   Modal,
   ModalHeader,
   ModalBody,
   Form,
   FormGroup,
   Label,
   Input
} from "reactstrap";

class SignUpModal extends Component {
   state = {
      modal: false,
      name: ""
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

      //   const newItem = {
      //      name: this.state.name
      //   };

      //   //Add item via addItem action
      //   this.props.addItem(newItem);

      //Close modal
      this.toggle();
   };

   render() {
      return (
         <div>
            <Button
               color="light"
               style={{ marginBottom: "2rem" }}
               onClick={this.toggle}
            >
               Sign Up
            </Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
               <ModalHeader toggle={this.toggle}>Sign Up</ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                     <FormGroup>
                        <Label for="item">Name</Label>
                        <Input
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Enter name"
                           onChange={this.onChange}
                        />
                        <br />
                        <Label for="item">Username</Label>
                        <Input
                           type="text"
                           name="username"
                           id="username"
                           placeholder="Choose a username"
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
                        <Button
                           color="primary"
                           style={{ marginTop: "2rem" }}
                           block
                        >
                           Submit
                        </Button>
                     </FormGroup>
                  </Form>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}

export default SignUpModal;
