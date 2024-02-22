import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import '../App.css'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)
  const amount = transactions.map((transaction) => transaction.amount)
  const income = amount.filter((item) => item > 0).reduce((acc,item) => (acc+item),0).toFixed(2)
  const expense = amount.filter(item => item < 0).reduce((acc,item) => (acc+item),0).toFixed(2)
  return (
    <div>
        <h3>Your Balance</h3>
        <h1><span>&#8377;</span>{income-Math.abs(expense)}</h1>
    </div>
  )
}

export default Balance