import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showExpenseFormHandler = () => {
    setShowExpenseForm(!showExpenseForm);
  };

  const expenseDataSubmitHandler = (expense) => {
    if(expense != null) {
      props.onAddNewExpense({ ...expense, id: Math.random() });
    }
    showExpenseFormHandler();
  };

  return (
    <div className="new-expense">
      {showExpenseForm && (
        <ExpenseForm onExpenseDataSubmit={expenseDataSubmitHandler} />
      )}

      {!showExpenseForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
