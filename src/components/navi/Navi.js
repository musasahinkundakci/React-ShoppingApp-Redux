import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";
import { Link } from "react-router-dom";
const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">
          <Link to="/"> Shop</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">
                {" "}
                <Link to="/saveproduct">Add Product</Link>
              </NavLink>
            </NavItem>

            <CartSummary />
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
