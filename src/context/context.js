import React, { useReducer, createContext } from "react";

import contextReducer from "./contextReducer";

const initialState = JSON.parse(localStorage.getItem("transactions")) || [
  {
    amount: 200,
    category: "Savings",
    type: "Income",
    date: "2020-12-09",
    id: "ccc17c19-d42b-4fa6-801c-b3750a831c44",
  },
  {
    amount: 120,
    category: "Clothes",
    type: "Expense",
    date: "2020-12-23",
    id: "1c42e8b5-f7b4-41bd-8cbb-9429c0b7097d",
  },
];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  //   action creators

  const deleteTransaction = (id) =>
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  const addTransaction = (transaction) =>
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });

  const balance = transactions.reduce(
    (acc, item) =>
      item.type === "Expense" ? acc - item.amount : acc + item.amount,
    0
  );

  return (
    <ExpenseTrackerContext.Provider
      value={{
        transactions,
        deleteTransaction,
        addTransaction,
        balance,
      }}
    >
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
