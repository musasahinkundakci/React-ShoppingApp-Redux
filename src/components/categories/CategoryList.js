import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreatorsC from "../../redux/actions/categoryActions";
import * as actionCreatorsP from "../../redux/actions/productActions";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }
  clickHandler(category) {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category);
  }
  activeOrNot(category) {
    return category.id === this.props.currentCategory.id ? true : false;
  }

  render() {
    return (
      <div>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem
              active={this.activeOrNot(category)}
              onClick={() => this.clickHandler(category)}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    categories: state.categoryListReducer,
    currentCategory: state.changeCategoryReducer,
  };
}
function mapDispatchToPrps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        actionCreatorsC.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        actionCreatorsC.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(actionCreatorsP.getProducts, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToPrps)(CategoryList);
