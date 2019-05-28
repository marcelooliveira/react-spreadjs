import React from 'react';
import { ChartPanel } from './ChartPanel.js'
import { withCommas } from "../util/util";

//todo: withCommas
export function SalesByCountry(props) {
    function sales() {
        return props.salesData.sort((first, second) => second.value - first.value)
    }

    return (
        <ChartPanel title="Sales By Country">
            <div className="salesByCountry">
                {sales().map((sale, index) => {
                return (
                    <div key={sale.country} className="countryRow">
                        <div className="countryName">{sale.country}</div>
                        <div className="countryAmount">${withCommas(sale.value)}</div>
                    </div>
                );
                })}
            </div>
        </ChartPanel>
    );
}
