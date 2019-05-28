import React, { useState } from 'react';
import { NavBar } from './NavBar'
import { TotalSales } from './TotalSales'
import { SalesByCountry } from './SalesByCountry'
import { SalesByPerson } from './SalesByPerson'
import { SalesTable } from './SalesTable'
import { groupBySum } from "../util/util";
import { recentSales } from "../data/data";

export function Dashboard() {

    const[sales, setSales] = new useState(recentSales.slice(0, recentSales.length));

    function totalSales() {
      const items = sales;
      const total = items.reduce(
        (acc, sale) => (acc += sale.value),
        0
      );
      return parseInt(total);
    };

    function chartData() {
      const items = sales;
      const groups = groupBySum(items, "country", "value");
      return groups;
    };

    function personSales() {
      const items = sales;
      const groups = groupBySum(items, "soldBy", "value");
      return groups;
    };

    function salesTableData() {
      return sales;
    };

    function onValueChanged(data) {
        setSales(data);
    }
    
    return (
        <div style={{ backgroundColor : '#ddd' }}>
            <NavBar title="Awesome Dashboard" />
            <div className="container">
                <div className="row">
                    <TotalSales total={totalSales()}/>
                    <SalesByCountry salesData={chartData()}/>
                    <SalesByPerson salesData={personSales()}/>
                    <SalesTable tableData={salesTableData()} onValueChanged={onValueChanged}/>
                </div>
            </div>
        </div>
    );
}

