import React, { Component } from "react";
import ProductRow from "./productRow";

class ProductTable extends Component {
  state = {
    products: [
      { id: 1, name: "Product#1", price: 20, amount: 2 },
      { id: 2, name: "Product#2", price: 10, amount: 0 },
      { id: 3, name: "Product#3", price: 30, amount: 0 },
    ],
  };
  // what is passed here depend on the line 45, the "p"---> onAdd={()=>this.handleAdd(p)}
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
      <React.Fragment>
        <h4>Product List</h4>
        <table className="table">
          <thead>
            <tr>
              <th itemScope="col">Name</th>
              <th itemScope="col">Price</th>
              <th itemScope="col">Action</th>
              <th itemScope="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map((p) => (
              // !!!important!!! use map function to render a list of item
              // props are actually assigned here!!!
              <ProductRow
                key={p.id}
                productRow={p}
                onAdd={() => this.handleAddDelete(p, true)} // for pass argument to event handler, we use this arrow function
                onDelete={() => this.handleAddDelete(p, false)}
              >
                {p}
              </ProductRow>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default ProductTable;
