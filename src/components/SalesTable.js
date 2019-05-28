import React, { useEffect } from 'react';
import { TablePanel } from "./TablePanel";

// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import Excel from "@grapecity/spread-excelio";
import { saveAs } from 'file-saver';
import { extractSheetData } from "../util/util.js";
import { SpreadSheets, Worksheet, Column } from '@grapecity/spread-sheets-react';

//todo: withCommas
export function SalesTable(props) {
    const config = {
        sheetName: 'Sales Data',
        hostClass: 'Spreadsheet',
        autoGenerateColumns: true,
        width: 200,
        visible: true,
        resizable: true,
        priceFormatter: '$ #.00',
        chartKey: 1,
        hostStyle: { 
            width: '100%',
            height: '400px',
            border: '1px solid lightgray'
        }
    }

    var _spread;

    function workbookInit(spread) {
        _spread = spread;
    }
    
    function fileChange(e) {
        if (this._spread) {
            const fileDom = e.target || e.srcElement;
            const excelIO = new Excel.IO();
            const spread = this._spread;
            const store = this.$store;

            const deserializationOptions = {
                frozenRowsAsColumnHeaders: true
            };

            excelIO.open(fileDom.files[0], (data) => {
            console.dir(extractSheetData(data));
            const newSalesData = extractSheetData(data);
            store.commit('updateRecentSales', newSalesData)
            });
        }
    }

    function exportSheet() {
        const spread = _spread;
        const fileName = "SalesData.xlsx";

        const sheet = spread.getSheet(0);
        const excelIO = new Excel.IO();
        const json = JSON.stringify(spread.toJSON({ 
            includeBindingSource: true,
            columnHeadersAsFrozenRows: true,
        }))

        excelIO.save(json, (blob) => {
            saveAs(blob, fileName);
        }, function (e) {  
            alert(e);  
        });
    }

    function valueChanged(e) {
        props.onValueChanged(e.target.value);
    }

    return (
        <TablePanel key={config.chartKey} title="Recent Sales">
            <div style={{width:'100%',height:'400px',border: '1px solid lightgray'}}>
            <SpreadSheets workbookInitialized={workbookInit} valueChanged={valueChanged}>
                <Worksheet name={config.sheetName} dataSource={props.tableData} autoGenerateColumns='autoGenerateColumns'>
                    <Column width={50} dataField='id' headerText="ID"></Column>
                    <Column width={200} dataField='client' headerText="Client"></Column>
                    <Column width={320} dataField='description' headerText="Description"></Column>
                    <Column width={100} dataField='value' headerText="Value" formatter={config.priceFormatter} resizable="resizable"></Column>
                    <Column width={100} dataField='itemCount' headerText="Quantity"></Column>
                    <Column width={100} dataField='soldBy' headerText="Sold By"></Column>
                    <Column width={100} dataField='country' headerText="Country"></Column>                   
                </Worksheet>
            </SpreadSheets>
            </div>
            <div className="dashboardRow">
                <button className="btn btn-primary dashboardButton" onClick={exportSheet}>Export to Excel</button>
                <div>
                <b>Import Excel File:</b>
                <div>
                    <input type="file" className="fileSelect" change='fileChange($event)' />
                </div>
                </div>
            </div>
        </TablePanel>
    );
}
