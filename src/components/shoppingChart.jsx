import React, { Component } from "react";
import ShoppingCartRow from "./shoppingCartRow";

class ShoppingChart extends Component {
  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <table className="table">
          <tbody>
            <ShoppingCartRow />
          </tbody>
        </table>
      </div>
    );
  }
}

export default ShoppingChart;
