import React from 'react';
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {

  const handleChange = (event) => {
  
    props.filterdYear(event.target.value);
  }

  const currentYear = new Date().getFullYear();

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by Years ({props.length})</label>
        <select onChange={handleChange} >
          <option value="all">All</option>
          <option value={currentYear}>{currentYear}</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>

        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
