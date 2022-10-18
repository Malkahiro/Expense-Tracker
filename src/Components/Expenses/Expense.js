import ExpenseItem from './ExpenseItem'
import './Expense.css'

const Expense = ({expenses}) => {
    const expenseList = expenses.map((expense) =>{
        return <ExpenseItem expense={expense} key={expense.id}/>
    })
    return ( <div className="expenses">
        {expenseList}
    </div> );
}
 
export default Expense;