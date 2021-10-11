import React, { Component } from "react";
import ProductTable from "./productTable";
import ShoppingCart from "./shoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "react-bootstrap/Dropdown";

class ProductAndSummaryTable extends Component {
  state = {
    products: [
      { id: 1, name: "Product#1", price: 20, amount: 0 },
      { id: 2, name: "Product#2", price: 10, amount: 0 },
      { id: 3, name: "Product#3", price: 30, amount: 0 },
    ],
  };

  handleAddDelete = (productRow, ifAdd) => {
    // !!! we cannot directly change the state here!!!!!
    const products = [...this.state.products]; // clone the whole products array
    const index = products.indexOf(productRow); // get the index of the seleted row
    products[index] = { ...productRow }; // clone the row

    products[index].amount += ifAdd ? 1 : -1; // update the selected row value in the products clone
    this.setState({ products: products }); // set the state with the products clone
  };

  handleEmptyCart = () => {
    const products = this.state.products.map((p) => {
      p.amount = 0;
      return p;
    });
    this.setState({ products: products });
  };

  render() {
    return (
      <div>
        <div className="row align-items-center justify-content-between">
          <h4 className="my-3">Product List</h4>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Dropdown.Toggle>
            <Dropdown.Menu
              align="right"
              className="p-3"
              style={{ width: "max-content" }}
            >
              <ShoppingCart
                products={this.state.products}
                onAddDelete={this.handleAddDelete}
                onEmpty={this.handleEmptyCart}
              />
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/*this where we feed the props*/}
        <ProductTable
          products={this.state.products}
          onAddDelete={this.handleAddDelete}
        />
      </div>
    );
  }
}

export default ProductAndSummaryTable;
