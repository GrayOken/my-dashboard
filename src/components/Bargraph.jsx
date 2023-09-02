import React from "react";
import { BarChart } from '@mui/x-charts/BarChart'
import { mockBarData } from "../../mockData";
import { axisClasses } from '@mui/x-charts';

export default function Bargraph() {

    const chartSetting = {
        yAxis: [
            {
                label: 'Food orders',
            },
        ],
        width: 500,
        height: 300,
        sx: {
            [`.${axisClasses.left} .${axisClasses.label}`]: {
                transform: 'rotate(-90deg) translate(0px, -10px)',
            },
        },
    }

    return (
        <>
            <div className="chart-container">
                <BarChart
                    dataset={mockBarData}
                    xAxis={[{ scaleType: 'band', dataKey: 'country' }]}
                    series={[
                        { dataKey: 'burger', label: 'Burger' },
                        { dataKey: 'kebab', label: 'Kebab' },
                        { dataKey: 'donut', label: 'Donut' },
                        { dataKey: 'hot dog', label: 'Hot Dog' },
                    ]}
                    {...chartSetting}
                />
            </div>
        </>
    )
}