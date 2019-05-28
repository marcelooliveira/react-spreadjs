import React, { Component } from 'react';
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

export class Dummy extends Component {
    constructor(props) {
        super(props);
        this.spreadBackColor = 'aliceblue';
        this.sheetName = 'Goods List';
        this.hostStyle =
            {
                width: '800px',
                height: '600px'
            };
        this.data = [{ Name: 'Apple', Category: 'Fruit', Price: 1, 'Shopping Place': 'Wal-Mart' }, { Name: 'Potato', Category: 'Fruit', Price: 2.01, 'Shopping Place': 'Other' }, { Name: 'Tomato', Category: 'Vegetable', Price: 3.21, 'Shopping Place': 'Other' }, { Name: 'Sandwich', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' }, { Name: 'Hamburger', Category: 'Food', Price: 2, 'Shopping Place': 'Wal-Mart' }, { Name: 'Grape', Category: 'Fruit', Price: 4, 'Shopping Place': 'Sun Store' }
        ];
        this.columnWidth = 100;
    }
    render() {
        return (
            <div>
                <SpreadSheets backColor={this.spreadBackColor} hostStyle={this.hostStyle}>
                    <Worksheet name={this.sheetName} dataSource={this.data}>
                        <Column dataField='Name' width={300}></Column>
                        <Column dataField='Category' width={this.columnWidth}></Column>
                        <Column dataField='Price' width={this.columnWidth}
                            formatter="$#.00"></Column>
                        <Column dataField='Shopping Place' width={this.columnWidth}></Column>
                    </Worksheet>
                </SpreadSheets>
            </div>
        )
    }
}
