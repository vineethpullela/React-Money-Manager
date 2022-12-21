import {Component} from 'react'
import {v4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItems from '../TransactionItem'

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
  state = {
    title: '',
    amount: 0,
    optionId: transactionTypeOptions[0].optionId,
    transactionList: [],
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, optionId} = this.state
    const typeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = typeOption
    const newTransaction = {
      id: v4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  onDelete = id => {
    const {transactionList} = this.state

    const updatedTransactionList = transactionList.filter(
      eachTransaction => eachTransaction.id !== id,
    )

    this.setState({transactionList: updatedTransactionList})
  }

  changeTitleInput = event => {
    this.setState({title: event.target.value})
  }

  changeAmountInput = event => {
    this.setState({amount: event.target.value})
  }

  changeAmountType = event => {
    this.setState({optionId: event.target.value})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {title, amount, optionId, transactionList} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()

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
          <MoneyDetails
            balanceAmount={balanceAmount}
            incomeAmount={incomeAmount}
            expensesAmount={expensesAmount}
          />
          <div className="transaction-details-container">
            <form className="transaction-from" onSubmit={this.addTransaction}>
              <h1 className="transaction-heading">Add Transaction</h1>
              <label htmlFor="title" className="label">
                TITLE
              </label>
              <input
                type="text"
                id="title"
                value={title}
                className="input"
                placeholder="TITLE"
                onChange={this.changeTitleInput}
              />
              <label htmlFor="amount" className="label">
                AMOUNT
              </label>
              <input
                type="text"
                id="amount"
                value={amount}
                className="input"
                placeholder="AMOUNT"
                onChange={this.changeAmountInput}
              />
              <label htmlFor="select" className="label">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={optionId}
                onChange={this.changeAmountType}
              >
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
                  {transactionList.map(eachTransaction => (
                    <TransactionItems
                      key={eachTransaction.id}
                      transactionDetails={eachTransaction}
                      onDelete={this.onDelete}
                    />
                  ))}
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
