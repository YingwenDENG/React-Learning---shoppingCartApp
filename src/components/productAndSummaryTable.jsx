import React, { Component } from "react";
import ProductTable from "./productTable";
import ShoppingChart from "./shoppingChart";

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

  render() {
    return (
      <div>
        {/*this where we feed the props*/}
        <ProductTable
          products={this.state.products}
          onAddDelete={this.handleAddDelete}
        />
        <ShoppingChart
          products={this.state.products}
          onAddDelete={this.handleAddDelete}
        />
      </div>
    );
  }
}

export default ProductAndSummaryTable;
