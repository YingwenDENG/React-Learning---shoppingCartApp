import React, { Component } from "react";
import ProductRow from "./productRow";

class ProductTable extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="my-3">Product List</h4>
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
            {this.props.products.map((p) => (
              // !!!important!!! use map function to render a list of item
              // props are actually assigned here!!!
              <ProductRow
                key={p.id}
                productRow={p}
                onAdd={() => this.props.onAddDelete(p, true)} // for pass argument to event handler, we use this arrow function
                onDelete={() => this.props.onAddDelete(p, false)}
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
