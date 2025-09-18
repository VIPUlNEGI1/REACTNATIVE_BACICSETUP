import { createContext, useReducer } from "react";
export const DUMMY_EXPENSES = [
   { id: 'e1', description: 'A pair of shoes', amount: 59.99, date: new Date('2021-12-19') },
  { id: 'e2', description: 'Groceries', amount: 42.75, date: new Date('2021-12-20') },
  { id: 'e3', description: 'Electricity Bill', amount: 120.50, date: new Date('2021-12-21') },
  { id: 'e4', description: 'New Jacket', amount: 89.99, date: new Date('2021-12-22') },
  { id: 'e5', description: 'Restaurant Dinner', amount: 35.20, date: new Date('2021-12-23') },
  { id: 'e6', description: 'Internet Bill', amount: 55.00, date: new Date('2021-12-24') },
  { id: 'e7', description: 'Gas Refill', amount: 22.10, date: new Date('2021-12-25') },
  { id: 'e8', description: 'Movie Tickets', amount: 18.50, date: new Date('2021-12-26') },
  { id: 'e9', description: 'Coffee', amount: 4.75, date: new Date('2021-12-27') },
  { id: 'e10', description: 'Phone Recharge', amount: 15.00, date: new Date('2025-09-18') },
  { id: 'e11', description: 'Books', amount: 29.95, date: new Date('2025-09-18') },
  { id: 'e12', description: 'Gym Membership', amount: 60.00, date: new Date('2022-01-05') },
  { id: 'e13', description: 'Taxi Ride', amount: 12.30, date: new Date('2022-01-07') },
  { id: 'e14', description: 'Laptop Bag', amount: 45.99, date: new Date('2022-01-09') },
  { id: 'e15', description: 'Groceries', amount: 38.40, date: new Date('2022-01-12') },
  { id: 'e16', description: 'New Phone', amount: 499.99, date: new Date('2022-01-15') },
  { id: 'e17', description: 'Bus Ticket', amount: 2.50, date: new Date('2022-01-16') },
  { id: 'e18', description: 'Water Bill', amount: 20.00, date: new Date('2022-01-18') },
  { id: 'e19', description: 'Electricity Bill', amount: 130.75, date: new Date('2025-09-18') },
  { id: 'e20', description: 'Shoes', amount: 75.00, date: new Date('2025-09-18') },
  { id: 'e21', description: 'Coffee Beans', amount: 14.25, date: new Date('2025-09-18') },
  { id: 'e22', description: 'Headphones', amount: 85.99, date: new Date('2022-01-25') },
  { id: 'e23', description: 'Snacks', amount: 6.75, date: new Date('2022-01-26') },
  { id: 'e24', description: 'Gym Supplements', amount: 49.50, date: new Date('2022-01-27') },
];export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;

    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}
export default ExpensesContextProvider