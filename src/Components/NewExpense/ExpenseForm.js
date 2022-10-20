import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData}) => {
    //State
const [title, setTitle] = useState('');
const [amount, setAmount] = useState('')
const [date, setDate] = useState('');

// handler functions
const handleTitleChange = (event) =>{
setTitle(event.target.value);
}

const handleAmount = (event) =>{
    setAmount(event.target.value);
}

const handleDate = (event) =>{
    setDate(event.target.value);
}

const handleSubmit = (event) =>{
event.preventDefault();
const expenseData = {
    title: title,
    amount: amount,
    date: new Date(date)
}

onSaveExpenseData(expenseData)

setTitle('');
setAmount('');
setDate('');
}



    return ( <form onSubmit={handleSubmit}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="">Title</label>
                <input value={title} type="text" onChange={handleTitleChange} />
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Amount</label>
                <input value={amount} onChange={handleAmount} type="number" min='0.01' step='0.01'/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Date</label>
                <input value={date} onChange={handleDate} type="date" min='2019-01-01' max='2022-12-31' />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form> );
}
 
export default ExpenseForm;