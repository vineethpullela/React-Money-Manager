import {Component} from 'react'
import './index.css'
import MoneyDetails from '../MoneyDetails'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="money-manager-container">
          <div className="money-manager-profile-container">
            <h1 className="profile-name">Hi, Richard</h1>
            <p className="profile-description">
              Welcome back to your
              <span className="money-manager-name"> Money Manager</span>
            </p>
          </div>
          <MoneyDetails />
          <div className="transaction-details-container">
            <form className="transaction-from">
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value=""
                className="input"
                placeholder="TITLE"
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value=""
                className="input"
                placeholder="AMOUNT"
              />
              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select id="select" className="input">
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
            <div className="transaction-history-container">
              <h1 className="transaction-heading">History</h1>
              <div className="transaction-table-container">
                <ul className="transaction-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  <TransactionItems />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
