import React, { Component } from "react";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink
} from "reactstrap";
import SignUpModal from "./SignUpModal";
import LoginModal from "./LoginModal";

export default class MainNav extends Component {
   state = {
      isOpen: false
   };

   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   };

   render() {
      return (
         <div>
            <Navbar color="primary" dark expand="md">
               <NavbarBrand href="/">The54List</NavbarBrand>
               <NavbarToggler onClick={() => this.toggle()} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <NavItem>
                        <SignUpModal />
                     </NavItem>
                     <NavItem>
                        <LoginModal />
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
