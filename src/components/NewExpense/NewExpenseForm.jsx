import React, { useState } from "react";
import "./NewExpenseForm.css";

const ExpenseForm = (props) => {

  const [title, setTitle] = useState('')

  const [amount, setAmount] = useState('')

  const [date, setDate] = useState('')

  // const chngFunction = (event) => {
  //   console.log(chngFunction);
  // }

  // const dataAdd = props.dataAdd


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      id: 'e' + Math.round((Math.random() * 100)),
      title: title,
      amount: Number(amount),
      date: new Date(date),
    }
    props.addExpenses(data)
    setTitle('');
    setAmount('');
    setDate('');

  }

  const handleClose = () => {
    props.showHideFunction(false);
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            required
            type="text"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
          />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            required
            placeholder="Amount"
            onChange={(event) => setAmount(event.target.value)}
            value={amount}

          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            required
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}

          />
        </div>
        <div className="new-expense__actions">
          <button type="reset" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;