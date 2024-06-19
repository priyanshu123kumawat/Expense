import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import "./Expenses.css"
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart'

const Expenses = (props) => {

  const [filterYear, setfilterYear] = useState("all");

  const filteredData = props.items.filter((element) => {
    if (filterYear == 'all') {
      return element;
    } else {
      return element.date.getFullYear() == filterYear;
    }
  })

  const filterdYear = (year) => {
    setfilterYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter length={filteredData.length} year={filterYear}
        filterdYear={filterdYear} />
      <ExpensesChart items={filteredData} />
      <ExpensesList items={filteredData} />
    </Card>
  )
}

export default Expenses
