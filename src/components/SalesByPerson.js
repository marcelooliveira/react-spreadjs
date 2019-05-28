import React from 'react';
import { ChartPanel } from './ChartPanel.js'
import { withCommas } from "../util/util";

export function SalesByPerson(props){
    function sales() {
        return props.salesData.sort((first, second) => second.value - first.value)
    }

    return (
        <ChartPanel title="Sales By Salesperson">
            <div className="salesByPerson">
                {sales().map((sale, index) => {
                return (
                    <div key={sale.soldBy} className="personRow">
                        <div className="personName">{sale.soldBy}</div>
                        <div className="personAmount">${withCommas(sale.value)}</div>
                    </div>
                );
                })}
            </div>
        </ChartPanel>
    );
}
