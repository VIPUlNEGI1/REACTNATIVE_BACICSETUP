import { useContext } from "react";
import ExpensesOutput from "../component/ExpensesOutput/ExpencesOutput"; // Fixed import and typo
import { ExpensesContext } from "../Store/expenses-contex";
 
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput
      expenses={expensesCtx.expenses}
      expensesPeriodName="All Expenses"
fallbackText="No registered expenses found"

    />
  );
}

export default AllExpenses;
