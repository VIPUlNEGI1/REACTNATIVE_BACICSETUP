import ExpensesOutput from "../component/ExpensesOutput/ExpencesOutput";  
import { useContext } from "react";
import { ExpensesContext } from "../Store/expenses-contex";
import { getDateMinusDays } from "../component/ExpensesOutput/util/Date";

const RecentExpenses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const today = new Date();
  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    return expense.date > date7DaysAgo;
  });

  return ( 
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
            expensesPeriodName=" Recient Expenses"
      fallbackText="No registered expenses found"
    />
  );
};

export default RecentExpenses;
