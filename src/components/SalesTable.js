import React from 'react';
import { TablePanel } from "./TablePanel";

// SpreadJS imports
import '@grapecity/spread-sheets-react';
/* eslint-disable */
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2016colorful.css";
import Excel from "@grapecity/spread-excelio";
import { saveAs } from 'file-saver';
import { extractSheetData } from "../util/util.js";

//todo: withCommas
export function SalesTable(props) {
    function data() {
        return {
        sheetName: 'Sales Data',
        hostClass:'spreadsheet',
        autoGenerateColumns:true,
        width:200,
        visible:true,
        resizable:true,
        priceFormatter:"$ #.00",
        chartKey: 1
        }
    }

    function workbookInit(spread) {
        this._spread = spread;
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
        const spread = this._spread;
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

    return (
        <TablePanel key={props.chartKey} title="Recent Sales">
        <gc-spread-sheets hostClass={props.hostClass} workbookInitialized='workbookInit'>
            <gc-worksheet dataSource={props.tableData} name="sheetName" autoGenerateColumns='autoGenerateColumns'>
            <gc-column
                width='50'
                dataField="'id'"
                headerText="'ID'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
            <gc-column
                width='200'
                dataField="'client'"
                headerText="'Client'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
            <gc-column
                width="320"
                headerText="'Description'"
                dataField="'description'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
            <gc-column
                width="100"
                dataField="'value'"
                headerText="'Value'"
                visible = 'visible'
                formatter = 'priceFormatter'
                resizable = 'resizable'
                ></gc-column>
                <gc-column
                width="100"
                dataField="'itemCount'"
                headerText="'Quantity'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
                <gc-column
                width="100"
                dataField="'soldBy'"
                headerText="'Sold By'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
                <gc-column
                width="100"
                dataField="'country'"
                headerText="'Country'"
                visible = 'visible'
                resizable = 'resizable'
                ></gc-column>
            </gc-worksheet>
        </gc-spread-sheets>
        <div class="dashboardRow">
            <button class="btn btn-primary dashboardButton" click="exportSheet">Export to Excel</button>
            <div>
            <b>Import Excel File:</b>
            <div>
                <input type="file" class="fileSelect" change='fileChange($event)' />
            </div>
            </div>
        </div>
        </TablePanel>
    );
}
