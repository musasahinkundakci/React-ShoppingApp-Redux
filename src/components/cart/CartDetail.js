import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreatorsCart from "../../redux/actions/cartActions";
import { Button, Table } from "reactstrap";
import alertify from "alertifyjs";
class CartDetail extends Component {
  clickHandler(cartItem) {
    this.props.actions.removeFromCart(cartItem);
    alertify.error(`${cartItem.product.productName} is successfuly removed!`);
  }
  renderEmpty() {
    return <p>There is no element in Cart!</p>;
  }
  renderCartDetail() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units in Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.quantityPerUnit}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.clickHandler(cartItem)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderCartDetail()
          : this.renderEmpty()}
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
export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
