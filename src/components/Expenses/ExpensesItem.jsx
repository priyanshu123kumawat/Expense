import React from "react";
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";
import "./ExpensesItem.css";

const ExpensesItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpensesDate date={props.items.date} />
                <div className="expense-item__description">
                    <h2>{props.items.title}</h2>
                    <div className="expense-item__price">${props.items.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpensesItem