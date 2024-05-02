import React from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';

function Chart() {

    const data = [
        {
            name: 'Product A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Product B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Product C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Product D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Product E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Product F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Product G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];


    return (
            <div className='charts'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>

            </div>
    )
}

export default Chart
