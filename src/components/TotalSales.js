import React from 'react';
import { ChartPanel } from './ChartPanel.js'

export function TotalSales(props) {
    return (
        <ChartPanel title="Today's Sales ($)">
        <div class="totalSales">
            <div>{props.value}</div>
        </div>
        </ChartPanel>
    );
}


