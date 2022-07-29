import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CreateCard from '../MoneyDetails/index'
import CreateTransaction from '../TransactionItem/index'

const cardDetailsList = [
  {
    moneyType: 'Your Balance',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png',
    alt: 'balance',
    initialBalance: '0',
    bg: '#84cc16',
    bgColor: 'green',
  },
  {
    moneyType: 'Your Income',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png',
    alt: 'income',
    initialBalance: '0',
    bg: '#06b6d4',
    bgColor: 'blue',
  },
  {
    moneyType: 'Your Expenses',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png',
    alt: 'expenses',
    initialBalance: '0',
    bg: ' #7c3aed',
    bgColor: 'violet',
  },
]

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

const initialList = [
  {id: uuidv4(), title: 'salary', amount: 60000, type: 'Income'},
]

class MoneyManager extends Component {
  state = {title: '', amount: '', transactionsList: initialList}

  onAddTransaction = event => {
    event.preventDefault()
  }

  onChangeTitle = event => {
    console.log(event.target.value)
  }

  onChangeAmount = event => {
    console.log('Amount triggered')
  }

  render() {
    const {title, amount, transactionsList} = this.state

    return (
      <div className="bg">
        <div className="name-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="para">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <ul className="money-details-container">
          {cardDetailsList.map(each => (
            <CreateCard details={each} key={each.alt} />
          ))}
        </ul>

        <div className="below-container">
          <div className="input-container">
            <h4 className="AddTransaction">Add Transaction</h4>

            <label htmlFor="title" className="title-label">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              placeholder="TITLE"
              className="input-title"
              onChange={this.onChangeTitle}
            />

            <label htmlFor="title" className="title-label">
              AMOUNT
            </label>
            <input
              type="text"
              id="title"
              placeholder="AMOUNT"
              className="input-title"
            />

            <label htmlFor="title" className="title-label">
              TYPE
            </label>
            <select className="input-title">
              <option value="income" optionid="INCOME">
                Income
              </option>
              <option value="expenses" optionid="EXPENSES">
                Expenses
              </option>
            </select>

            <button className="add-button" type="button">
              Add
            </button>
          </div>

          <div className="history-container">
            <h4 className="AddTransaction">History</h4>
            <ul className="title-amount-type-container">
              <div className="title-amount-type-container-box">
                <p className="amount-parts">Title</p>
                <p className="amount-parts">Amount</p>
                <p className="amount-parts">Type</p>
              </div>
              {transactionsList.map(each => (
                <CreateTransaction details={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
