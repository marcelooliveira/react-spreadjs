import React from 'react';
import { NavBar } from './NavBar'
import { TotalSales } from './TotalSales'
import { SalesByCountry } from './SalesByCountry'
import { SalesByPerson } from './SalesByPerson'
import { SalesTable } from './SalesTable'
import { groupBySum } from "../util/util";
import { recentSales } from "../data/data";

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.store = {
          state: {
            recentSales
          }
        };
    }

    totalSales() {
      const items = this.store.state.recentSales;
      const total = items.reduce(
        (acc, sale) => (acc += sale.value),
        0
      );
      return parseInt(total);
    }

    chartData() {
      const items = this.store.state.recentSales;
      const groups = groupBySum(items, "country", "value");
      return groups;
    }

    personSales() {
      const items = this.store.state.recentSales;
      const groups = groupBySum(items, "soldBy", "value");
      return groups;
    }

    salesTableData() {
      return this.store.state.recentSales;
    }
    
    render() {
        return (
            <div style={{ backgroundColor : '#ddd' }}>
                <NavBar title="Awesome Dashboard" />
                <div className="container">
                    <div className="row">
                        <TotalSales value={this.totalSales()}/>
                        <SalesByCountry salesData={this.chartData()}/>
                        <SalesByPerson salesData={this.personSales()}/>
                        <SalesTable tableData={this.salesTableData()}/>
                    </div>
                </div>
            </div>
        );
    }
}

