import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from './NewExpenseForm';



const NewExpense = (props) => {



    const [showHide, setShowHide] = useState(false);//set value kisi bhi value ko update krta h

    const openForm = () => {
        setShowHide(true);
    }


    return (
        <div className="new-expense">
            {showHide ? (<ExpenseForm addExpenses={props.addExpenses} showHideFunction={setShowHide} />
            ) : (
                <button onClick={openForm}>Add New Expenses</button>
            )}
        </div>

    );
};

export default NewExpense;