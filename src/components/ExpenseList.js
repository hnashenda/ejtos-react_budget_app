import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { Dropdown } from './Dropdown';
import { Element } from './Element';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
    const { expenses,currency,dispatch } = useContext(AppContext);
    const handleCurrencyChange = (newCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency
        });
    };
    return (
        <div>
        <Dropdown selectedCurrency={currency} onCurrencyChange={handleCurrencyChange} />    
       
         <table className='table'>
              <thead className="thead-light">
            <tr>
              <th scope="col">Department</th>
              <th scope="col">Allocated Budget</th>
              <th scope="col">Increase by 10</th>
              <th scope="col">Decrease by 10</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
            <tbody>
            {expenses.map((expense) => (
                <ExpenseItem id={expense.id} key={expense.id} name={expense.name} cost={expense.cost} />
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default ExpenseList;
