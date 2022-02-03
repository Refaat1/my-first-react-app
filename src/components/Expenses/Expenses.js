import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(" ");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const expensesWithoutFilter = props.items.map(e => (<ExpenseItem
    key={e.id}
    title={e.title}
    amount={e.amount}
    date={e.date}
  />))
  const filteredExpenses = props.items.filter((expense) => (
    filteredYear.toString() === expense.date.getFullYear().toString()
  )).map(e => (<ExpenseItem
    key={e.id}
    title={e.title}
    amount={e.amount}
    date={e.date}
  />))
  return (
    <li style={{listStyle:"none"}}>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={[filteredExpenses,expensesWithoutFilter,filteredYear]}/>
      </Card>
    </li>
  );
};

export default Expenses;
