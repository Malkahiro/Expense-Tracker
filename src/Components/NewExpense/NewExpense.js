import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = ({onAddExpense}) => {

    const [isEditing, setIsEditing] = useState(false);

    const handleSaveExpenseData = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
        setIsEditing(false);
    }

    const handleEditing = () =>{
        setIsEditing(true)
    }

    const handleStopEditing = () =>{
        setIsEditing(false)
    }



    return ( <div className='new-expense'>
        {!isEditing && <button onClick={handleEditing}>Add New Expense</button>}
        {isEditing && <ExpenseForm handleStopEditing={handleStopEditing} onSaveExpenseData = {handleSaveExpenseData}/>}
    </div> );
}
 
export default NewExpense;