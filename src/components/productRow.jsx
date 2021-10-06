import React, { Component } from "react";

class ProductRow extends Component {
  getBadgeClass() {
    let badgeClass = "badge m-2 badge-pill ";
    badgeClass +=
      this.props.productRow.amount !== 0 ? "badge-danger" : "badge-warning";
    return badgeClass;
  }

  deactiveButton() {
    return this.props.productRow.amount === 0;
  }

  render() {
    return (
      <tr>
        <td>{this.props.productRow.name}</td>
        <td>{this.props.productRow.price}</td>
        <td>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={() => this.props.onAdd(this.props.productRow)}
          >
            +
          </button>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={() => this.props.onDelete(this.props.productRow)}
            disabled={this.deactiveButton()}
          >
            -
          </button>
        </td>
        <td>
          <span className={this.getBadgeClass()}>
            {this.props.productRow.amount}
          </span>
        </td>
      </tr>
    );
  }
}

export default ProductRow;
