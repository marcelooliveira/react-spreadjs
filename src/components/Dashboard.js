import React from 'react';
import { NavBar } from './NavBar'
import { TotalSales } from './TotalSales'
import { SalesByCountry } from './SalesByCountry'
import { SalesByPerson } from './SalesByPerson'
import { SalesTable } from './SalesTable'

export class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            totalSales: 123,
            chartData: [
                {
                    value: 100
                }, {
                    value: 200
                }
            ],
            personSales: [
                {
                    value: 100
                }, {
                    value: 200
                }
            ]
        }
    }
    
    render() {
        return (
            <div style={{ backgroundColor : '#ddd' }}>
                <NavBar title="Awesome Dashboard" />
                <div class="container">
                    <div class="row">
                        <TotalSales total={this.state.totalSales}/>
                        <SalesByCountry salesData={this.state.chartData}/>
                        <SalesByPerson salesData={this.state.personSales}/>
                        <SalesTable tableData={this.state.salesTableData}/>
                    </div>
                </div>
            </div>
        );
    }
}

