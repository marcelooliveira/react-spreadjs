import React from 'react';
import { ChartPanel } from './ChartPanel.js'

//todo: withCommas
export class SalesByCountry extends React.Component {
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
            <ChartPanel title="Sales By Country">
                <div class="salesByCountry">
                  {this.sales().map((sale, index) => {
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
}
