import React, { Component } from "react";
import ProductTable from "./productTable";
import SummaryTable from "./summaryTable";

class ProductAndSummaryTable extends Component {
  render() {
    return (
      <div>
        <ProductTable />
        <SummaryTable />
      </div>
    );
  }
}

export default ProductAndSummaryTable;
