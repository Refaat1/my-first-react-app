import "./ExpensesList.css"
const ExpensesList = props => {
  const filteredExpenses = props.items[0]
  const expensesWithoutFilter = props.items[1]
  const filteredYear = props.items[2]
  let expensesContent = <p>No expenses fond</p>
  if ((filteredYear.length > 2 && filteredExpenses.length === 0) || (filteredExpenses.length > 0) ){
    expensesContent = filteredExpenses.length > 0 ? filteredExpenses :  <h2 className="expenses-list__fallback">No expenses fond</h2>
  }else {
    expensesContent = expensesWithoutFilter
  }
  return (
    <ul className="expenses-list">
    {expensesContent}
    
    </ul>
  ) 
}


export default ExpensesList;