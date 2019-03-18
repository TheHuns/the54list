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
               color="dark"
               style={{ marginBottom: "2rem" }}
               onClick={this.toggle}
            >
               Sign Up
            </Button>

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
               <ModalHeader toggle={this.toggle}>Add to parts list</ModalHeader>
               <ModalBody>
                  <Form onSubmit={this.onSubmit}>
                     <FormGroup>
                        <Label for="item">Item</Label>
                        <Input
                           type="text"
                           name="name"
                           id="item"
                           placeholder="Add item to parts list"
                           onChange={this.onChange}
                        />
                        <Button
                           color="light"
                           style={{ marginTop: "2rem" }}
                           block
                        >
                           Add Item
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