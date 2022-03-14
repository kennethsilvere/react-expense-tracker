import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expense</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((e) => (
        <ExpenseItem
          key={e.id}
          title={e.title}
          amount={e.amount}
          date={e.date}
        ></ExpenseItem>
      ))}
    </ul>
  );
};

export default ExpensesList;
