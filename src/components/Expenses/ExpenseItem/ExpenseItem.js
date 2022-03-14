import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <ExpenseDate date={props.date} />
          <h2>{props.title}</h2>
          <h3 className="expense-item__price">${props.amount}</h3>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
