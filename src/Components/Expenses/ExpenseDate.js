import './ExpenseDate.css'

const ExpenseDate = ({date}) => {
    /**toLocalString helps to output dates in a human readably way */
    const month = date.toLocaleString('en-US', {month: 'long'})
    /**Extracts the year as a four digit number */
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', {day: '2-digit'})
    return ( <div className="expense-date">
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__year'>{year}</div>
        <div className='expense-date__day'>{day}</div>
    </div> );
}
 
export default ExpenseDate;