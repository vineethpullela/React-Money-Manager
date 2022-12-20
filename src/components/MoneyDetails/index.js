import './index.css'

const MoneyDetails = () => (
  <div className="money-details-list-container">
    <div className="money-details-container card1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        className="money-details-img"
        alt="balance"
      />
      <div className="your-balance-text-container">
        <p className="your-balance-heading">Your Balance</p>
        <p className="your-balance-amount">Rs 40000</p>
      </div>
    </div>
    <div className="money-details-container card2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        className="money-details-img"
        alt="income"
      />
      <div className="your-balance-text-container">
        <p className="your-balance-heading">Your Income</p>
        <p className="your-balance-amount">Rs 40000</p>
      </div>
    </div>
    <div className="money-details-container card3">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        className="money-details-img"
        alt="expense"
      />
      <div className="your-balance-text-container">
        <p className="your-balance-heading">Your Expenses</p>
        <p className="your-balance-amount">Rs 40000</p>
      </div>
    </div>
  </div>
)

export default MoneyDetails
