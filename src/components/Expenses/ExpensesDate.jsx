import React from 'react'
import "./ExpensesDate.css";
import Card from '../UI/Card';

const ExpensesDate = (props) => {
  console.log(props.date);

  const month = props.date.toLocaleString("en-IN", { month: "long" });
  const day = props.date.toLocaleString("en-IN", { day: "2-digit" });
  const year = props.date.getFullYear();


  return (
    <Card>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </Card>
  )
}

export default ExpensesDate
