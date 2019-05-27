import React from 'react';
import { ChartPanel } from './ChartPanel.js'

export class TotalSales extends React.Component {
    constructor(props) {
        super(props);
debugger;
    }

    render() {
        return (
          <ChartPanel title="Today's Sales ($)">
            <div class="totalSales">
              <div>{this.props.value}</div>
            </div>
          </ChartPanel>
        );
    }
}


