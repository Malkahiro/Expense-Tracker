import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react';

const Expense = ({expenses}) => {

    const [filterdYear, setFilteredYear] = useState('2020');

const handleFilterChange = (filterYear) =>{
    setFilteredYear(filterYear);
}

    const expenseList = expenses.filter((expense) =>{
        return expense.date.getFullYear().toString() === filterdYear;
    }).map((expense) =>{
        return <ExpenseItem expense={expense} key={expense.id}/>
    })

    
    return ( 
        <div>
            <ExpensesFilter selectedYear = {filterdYear} onFilterChange={handleFilterChange}/>
    <div className="expenses">
        {expenseList}
    </div> 
    </div>);
}
 
export default Expense;