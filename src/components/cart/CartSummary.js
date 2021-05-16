import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreatorsCart from "../../redux/actions/cartActions";
import { Link } from "react-router-dom";
import alertify from "alertifyjs";
class CartSummary extends Component {
  onClickHandler(cartItem) {
    this.props.actions.removeFromCart(cartItem);
    alertify.error(`${cartItem.product.productName} is successfuly removed!`);
  }
  renderEmpty() {
    return (
      <NavItem>
        <NavLink>EmptyCart</NavLink>
      </NavItem>
    );
  }
  renderCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem>
              <Button
                color="danger"
                onClick={() => this.onClickHandler(cartItem)}
              >
                x
              </Button>
              -{cartItem.product.productName} - {cartItem.quantity}
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart">Go to Cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.renderEmpty()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeFromCart: bindActionCreators(
        actionCreatorsCart.removeFromCart,
        dispatch
      ),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
