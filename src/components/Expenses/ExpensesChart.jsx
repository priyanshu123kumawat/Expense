import React, { useState } from "react";
import Chart from "../chart/Chart";
import './ExpensesChart.css';

const ExpensesChart = (props) => {
    const expensemonth = [
        { lable: 'Jan', value: 0 },
        { lable: 'Feb', value: 0 },
        { lable: 'Mar', value: 0 },
        { lable: 'Apr', value: 0 },
        { lable: 'May', value: 0 },
        { lable: 'Jun', value: 0 },
        { lable: 'Jul', value: 0 },
        { lable: 'Aug', value: 0 },
        { lable: 'Sep', value: 0 },
        { lable: 'Oct', value: 0 },
        { lable: 'Nov', value: 0 },
        { lable: 'Dec', value: 0 },
    ];

    props.items.map((element, index) => {
        let monthNumber = element.date.getMonth();
        expensemonth[monthNumber].value += element.amount;
    });

    return (
        <Chart expensemonth={expensemonth} />
    )
}

export default ExpensesChart;