import React, { useState } from 'react';
import { TablePanel } from "./TablePanel";

import { extractSheetData } from "../util/util.js";

export const SalesTable = ({ tableData } ) => {
    const config = {
        sheetName: 'Sales Data',
        hostClass: ' spreadsheet',
        autoGenerateColumns: false,
        width: 200,
        visible: true,
        resizable: true,
        priceFormatter: '$ #.00',
        chartKey: 1
    }

    const [_spread, setSpread] = useState({});

    function workbookInit(spread) {
        setSpread(spread)
    }

	const tableRow = tableData.map((sale) => 
		(<tr key={sale.id}>
			<td>{sale.client}</td>
			<td>{sale.description}</td>
			<td>{sale.value}</td>
			<td>{sale.itemCount}</td>
		</tr>));
				
    return (
        <TablePanel key={config.chartKey} title="Recent Sales">
			<table class="table">
			  <thead>
				<tr>
				  <th>Client</th>
				  <th>Description</th>
				  <th>Value</th>
				  <th>Quantity</th>
				</tr>
			  </thead>
			  <tbody>
			  {tableRow}
			  </tbody>
			</table>
        </TablePanel>
    );
}
