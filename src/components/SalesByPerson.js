import React from 'react';
import { ChartPanel } from './ChartPanel.js'

//todo: withCommas
export function SalesByPerson(props){
    function sales() {
        return props.salesData.sort((first, second) => second.value - first.value)
    }

    return (
        <ChartPanel title="Sales By Salesperson">
            <div class="salesByPerson">
                {sales().map((sale, index) => {
                return (
                    <div key={sale.soldBy} class="personRow">
                        <div class="personName">{sale.soldBy}</div>
                        <div class="personAmount">{sale.value}</div>
                    </div>
                );
                })}
            </div>
        </ChartPanel>
    );
}
