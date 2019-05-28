import React from 'react';
import { ChartPanel } from './ChartPanel.js'

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
                    <div key={sale.country} class="countryRow">
                        <div class="countryName">{sale.country}</div>
                        <div class="countryAmount">{sale.value}</div>
                    </div>
                );
                })}
            </div>
        </ChartPanel>
    );
}
