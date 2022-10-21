import ExpenseItem from './ExpenseItem'
import './Expense.css'
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
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

    const expenseChartList = expenses.filter((expense) =>{
        return expense.date.getFullYear().toString() === filterdYear;
    })

    
    return ( 
        <div>
    <div className="expenses">
    <ExpensesFilter selectedYear = {filterdYear} onFilterChange={handleFilterChange}/>
    <ExpensesChart expenses={expenseChartList}/>
        {expenseList.length > 0 ? expenseList : <p className='expenses-list__fallback'>No Expenses Found</p>}
    </div> 
    </div>);
}
 
export default Expense;