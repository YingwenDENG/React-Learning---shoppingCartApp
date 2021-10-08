import React, { Component } from "react";
import ShoppingCartRow from "./shoppingCartRow";
import SumRow from "./sumRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

class ShoppingCart extends Component {
  getRows() {
    return this.props.products.filter((p) => p.amount > 0);
  }
  addRows() {
    const rowsToAdd = this.getRows();
    return rowsToAdd.map((p) => {
      return (
        <ShoppingCartRow key={p.id} products={p}>
          {p}
        </ShoppingCartRow>
      );
    });
  }
  renderCart() {
    if (this.getRows().length === 0) {
      return <div>No items!</div>;
    } else {
      return (
        <React.Fragment>
          <button
            className="btn btn-danger btn-sm m-2"
            style={{ float: "right" }}
            onClick={this.props.onEmpty}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
          <table className="table">
            <thead>
              <tr>
                <th itemScope="col">Name</th>
                <th itemScope="col">Amount</th>
                <th itemScope="col">Total Price</th>
              </tr>
            </thead>
            <tbody>
              {/* {this.props.products
              .filter((p) => p.amount > 0)
              .map((p) => {
                return (
                  <ShoppingCartRow key={p.id} products={p}>
                    {p}
                  </ShoppingCartRow>
                );
              })}*/}
              {this.addRows()}
              <SumRow products={this.props.products} />
            </tbody>
          </table>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        {/*<button*/}
        {/*  className="btn btn-danger btn-sm m-2"*/}
        {/*  style={{ float: "right" }}*/}
        {/*  onClick={this.props.onEmpty}*/}
        {/*>*/}
        {/*  <FontAwesomeIcon icon={faTrashAlt} />*/}
        {/*</button>*/}
        {this.renderCart()}
        {/*<table className="table">*/}
        {/*  <thead>*/}
        {/*    <tr>*/}
        {/*      <th itemScope="col">Name</th>*/}
        {/*      <th itemScope="col">Amount</th>*/}
        {/*      <th itemScope="col">Total Price</th>*/}
        {/*    </tr>*/}
        {/*  </thead>*/}
        {/*  <tbody>*/}
        {/*     {this.props.products*/}
        {/*      .filter((p) => p.amount > 0)*/}
        {/*      .map((p) => {*/}
        {/*        return (*/}
        {/*          <ShoppingCartRow key={p.id} products={p}>*/}
        {/*            {p}*/}
        {/*          </ShoppingCartRow>*/}
        {/*        );*/}
        {/*      })}*/}
        {/*    {this.addRows()}*/}
        {/*    <SumRow products={this.props.products} />*/}
        {/*  </tbody>*/}
        {/*</table>*/}
      </div>
    );
  }
}

export default ShoppingCart;
