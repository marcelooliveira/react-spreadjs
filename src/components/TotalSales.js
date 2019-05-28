import React from 'react';
import { ChartPanel } from './ChartPanel.js'
import { withCommas } from "../util/util";

export function TotalSales(props) {
    return (
        <ChartPanel title="Today's Sales ($)">
        <div className="totalSales">
            <div>${withCommas(props.total)}</div>
        </div>
        </ChartPanel>
    );
}


