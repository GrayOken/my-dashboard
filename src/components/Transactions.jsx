import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { mockTransactions } from '../../mockData';

const rows = mockTransactions.map((e, i) => ({
    id: i + e.txId,
    txId: e.txId,
    col1: e.user,
    col2: e.date,
    col3: e.cost
}))

const columns = [
    { field: "txId", headerName: 'Id', width: 150 },
    { field: "col1", headerName: 'User', width: 150 },
    { field: "col2", headerName: 'Date', width: 150 },
    { field: "col3", headerName: 'Cost', width: 150 }
]

export default function Transactions() {
    return (
        <>
            <div className='transaction-container' style={{ height: 300, width: "auto" }} >
                <DataGrid rows={rows} columns={columns} sx={{ border: "none" }} />
            </div>
        </>
    );
}