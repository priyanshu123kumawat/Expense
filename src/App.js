import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 2, 23),
  },
  {
    id: "e2",
    title: "Tv",
    amount: 36.62,
    date: new Date(2024, 4, 20),
  },
  {
    id: "e3",
    title: "Phone",
    amount: 832,
    date: new Date(2024, 5, 22),
  },
  {
    id: "e4",
    title: "Car",
    amount: 7564,
    date: new Date(2024, 1, 21),
  }
]

function App() {

  const [dataAdd, setdataAdd] = useState(DUMMY_EXPENSES)

  const addExpenses = (expense) => {
    setdataAdd((prev) => {
      return [expense, ...prev];
    })
  }

  return (
    <>
      <NewExpense addExpenses={addExpenses} />
      <Expenses items={dataAdd} />
    </>
  );
}

export default App;
