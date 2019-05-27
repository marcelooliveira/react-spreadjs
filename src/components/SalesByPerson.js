import React from 'react';
import { ChartPanel } from './ChartPanel.js'

//todo: withCommas
export class SalesByPerson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        //this.addOne = this.addOne.bind(this)
    }

    sales() {
        return this.props.salesData.sort((first, second) => second.value - first.value)
    }

    render() {
        return (
            <ChartPanel title="Sales By Salesperson">
                <div class="salesByPerson">
                    {this.sales().map((sale, index) => {
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
}
