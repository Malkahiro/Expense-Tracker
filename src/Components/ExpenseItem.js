import './ExpenseItem.css'


const ExpenseItem = ({expenses}) => {


    return (expenses.map((expense) =>{
        return (
            <div className='expense-item'>
        {/**Can't render normaly since this is an object */}
        <div>{expense.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{expense.title}</h2>
            <div className='expense-item__price'>{expense.amount}</div>
        </div>
    </div>
        )
    }));
}

export default ExpenseItem;