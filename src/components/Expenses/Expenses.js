import { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card/Card";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesFilter from "./ExpenseFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses({ expenses }) {
  const [selectedYear, setSelectedYear] = useState("2019");

  const expensesFilterChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selectedFilter={selectedYear}
          onFilterChange={expensesFilterChangeHandler}
        />
        <ExpensesChart expensesData={filteredExpenses}></ExpensesChart>
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </>
  );
}

export default Expenses;
