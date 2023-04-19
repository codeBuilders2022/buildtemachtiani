import React from "react";
import './Chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const Chart = ({data,keyData,width}) => {
    return (
        <>
            <LineChart width={width} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="year" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={keyData} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </>
    )
}
export default Chart