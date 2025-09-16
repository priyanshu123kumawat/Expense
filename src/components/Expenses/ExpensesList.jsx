import React from 'react';
import "./ExpensesList.css";  
import ExpensesItem from './ExpensesItem';




const ExpensesList = (props) => { 

    return (
        <ul className="expenses-list">
            {props.items.map((element, index) => (
                <ExpensesItem items={element}></ExpensesItem>
            ))}
        </ul>
    );
}

export default ExpensesList
