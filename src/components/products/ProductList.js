import { Badge, Button, Table } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreatorsProduct from "../../redux/actions/productActions";
import * as actionCreatorsCart from "../../redux/actions/cartActions";
import { Component, useEffect } from "react";
import alertify from "alertifyjs";
import { Link } from "react-router-dom";
class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart(product) {
    this.props.actions.addToCart({
      product,
      quantity: 1,
    });
    alertify.success(`${product.productName} is successfuly added to cart!`);
  }
  render() {
    return (
      <Table hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Quantity per Unit</th>
            <th>Units in Stock</th>
            <th>Unit Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>
                <Link to={"/saveproduct/" + product.id}>
                  {product.productName}
                </Link>
              </td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitsInStock}</td>
              <td>{product.unitPrice}</td>
              <td>
                <Button color="warning" onClick={() => this.addToCart(product)}>
                  AddToCart
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(
        actionCreatorsProduct.getProducts,
        dispatch
      ),
      addToCart: bindActionCreators(actionCreatorsCart.addToCart, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
