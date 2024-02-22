import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext';
import '../App.css'

const AddTransaction = () => {
    const [text,setText] = useState('');
    const [amount,setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext)
    

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 1000),
            text,
            amount: parseInt(amount)
        }
        addTransaction(newTransaction)
        setText('')
        setAmount(0)
    }

  return (
    <div>
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
                <label htmlFor="text">Text</label>
                <input type="text" placeholder='Enter the text...' value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label htmlFor="amount">Amount <br />
                
                </label>
                <input type="number" placeholder='Enter amount...' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
    </div>
  )
}

export default AddTransaction