import './index.css'

const TransactionItems = () => (
  <li className="table-row">
    <p className="transaction-text">Salary</p>
    <p className="transaction-text">Rs 50000</p>
    <p className="transaction-text">Income</p>
    <div className="delete-button-container">
      <button type="button" className="delete-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          className="delete-icon"
          alt="delete"
        />
      </button>
    </div>
  </li>
)

export default TransactionItems
