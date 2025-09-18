 
import ExpensesOutput from "../component/ExpensesOutput/ExpencesOutput";  
import { useContext } from "react";
import { ExpensesContext } from "../Store/expenses-contex";
import { getDateMinusDays } from "../component/ExpensesOutput/util/Date";

const RecentExpenses = () => {
  const expensesCtx =useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense)=>{
    const today = new Date();
    const date7DaysAgow= getDateMinusDays(today,7);


    return expense.date > date7DaysAgow;

  })
  return  ( 
  <ExpensesOutput
  expenses={recentExpenses}
  expensesPeriod="Last 7 Days"
  fallbackText="No registered expenses found"
/>
  )
};

export default RecentExpenses;
