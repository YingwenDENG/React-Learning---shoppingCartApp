import React, { Component } from "react";

class ShoppingCartRow extends Component {
  getTotal() {
    return this.props.products.price * this.props.products.amount;
  }
  render() {
    return (
      <tr>
        <td>{this.props.products.name}</td>
        <td>{this.props.products.amount}</td>
        <td>{this.getTotal()}</td>
      </tr>
    );
  }
}

export default ShoppingCartRow;
