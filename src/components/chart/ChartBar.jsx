import React from 'react'
import './ChartBar.css';

const ChartBar = ({ lable, value, key, maxValue }) => {

  let barFillHeight = "0%";
  if (maxValue > 0) {
    // console.log(maxValue);
    barFillHeight = Math.round((value / maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight, backgroundColor: "red" }}></div>
      </div>
      <div className="chart-bar__lable">{lable}</div>
    </div>
  )
}

export default ChartBar
