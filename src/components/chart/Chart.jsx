import React, { useState } from 'react'
import ChartBar from './ChartBar'
import './Chart.css';


const Chart = (props) => {
  const expensemonth = props.expensemonth;
  const dataPointValue = expensemonth.map(dataPoint => dataPoint.value)
  const totalMaximum = Math.max(...dataPointValue);


  return (
    <div className='chart'>
      {
        expensemonth.map((element, index) => (
          <ChartBar maxValue={totalMaximum} lable={element.lable} value={element.value} key={index} />
        ))
      }



    </div>
  )
}

export default Chart
