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
                        <NavLink href="/" title="It's Free!">
                           Sign Up
                        </NavLink>
                     </NavItem>
                     <NavItem>
                        <NavLink href="/">Login</NavLink>
                     </NavItem>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}
