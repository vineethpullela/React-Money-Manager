import './index.css'

const TransactionItems = props => {
  const {transactionDetails, onDelete} = props
  const {title, amount, type, id} = transactionDetails

  const deleteTransaction = () => {
    onDelete(id)
  }

  return (
    <li className="table-row">
      <p className="transaction-text">{title}</p>
      <p className="transaction-text">Rs {amount}</p>
      <p className="transaction-text">{type}</p>
      <div className="delete-button-container">
        <button
          type="button"
          className="delete-button"
          onClick={deleteTransaction}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="delete-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItems
