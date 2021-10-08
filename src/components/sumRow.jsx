import React, { Component } from "react";

class SumRow extends Component {
  getSum() {
    let sum = 0;

    this.props.products.map((p) => {
      sum += p.price * p.amount;
      return sum;
    });

    return sum;
  }
  render() {
    return (
      <tr>
        <th colSpan="2">Sum</th>
        <th>{this.getSum()}</th>
      </tr>
    );
  }
}

export default SumRow;
