import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { mockGeographyData } from "../../mockData";
import { Hidden } from "@mui/material";

export default function Revenue() {

    const revenueTotal = mockGeographyData
        .reduce((acc, curr) => acc + curr.value, 0)
        .toLocaleString("en-US")

    const rows = mockGeographyData.map((e) => (
        {
            id: e.id,
            col1: e.value
        }
    )
    )

    const columns = [
        { field: "id", headerName: 'Country ID', width: 150 },
        { field: "col1", headerName: 'Rev', width: 150 }
    ]

    return (
        <>
            <div className="revenue-container">
                <div>
                    <h3>
                        Our YTD revenue is ${revenueTotal}
                    </h3>
                </div>
                <div className='revenue-table-container' style={{ height: 300, width: 320 }} >
                    <DataGrid rows={rows} columns={columns} sx={{ border: "none" }} />
                </div>

            </div>
        </>
    )
}