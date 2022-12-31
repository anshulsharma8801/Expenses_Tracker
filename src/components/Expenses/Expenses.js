import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
// import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return (expense.date.getFullYear().toString() === filteredYear || ExpensesFilter === "Show All");
  });
  
  // const ShowAll = () => {
    
  //     return (
  //       <div>
  //         <ul className='expenses-list'>
  //         {props.items.map((expense) => (
  //           <ExpenseItem
  //             key={expense.id}
  //             title={expense.title}
  //             amount={expense.amount}
  //             date={expense.date}
  //           />
  //         ))}
  //       </ul>
  //         <ExpensesList items={filteredExpenses} />

  //       </div>
        
  //     );
      
  // }

  // if(filteredYear === "Show All"){
  //   ShowAll();
  // }


  return (
    <div>
      
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;