import React, { useContext } from 'react'
import { TrackerContext } from '../context/globalState'

const Transaction = ({ id, text, amount}) =>{

    const { curr, removeFunc } = useContext(TrackerContext)

    const textColor = amount > 0;
    
    return(
        <div style={{ display: 'flex' }}>
            <button style={{ fontSize: 20, height: 30, backgroundColor: 'none', color: 'red', marginTop: 30 }} onClick={() => removeFunc(id) }>X</button>
            <div
                style={{
                    margin: 10,
                    border: '1px solid blue',
                    height: 70,
                    width: '98%',
                    borderRadius: 25
                }}
            >
                <span style={{ color: textColor? 'green' : 'red',  paddingLeft: 10, paddingTop: 0, display:'flex' }}>
                    <p>{ text } </p>&nbsp;&nbsp;
                    <p><b>{curr}{ amount }</b></p>
                </span>
                <i style={{ fontSize:10, paddingLeft: 15}}>{Date()}</i>
            </div>
        </div>
    )
}

const Transactions = () => {

    const { transactions } = useContext(TrackerContext)

  return (
    <div>
        <h3>Transactions</h3>
        <div
            style={{
                height: 220,
                //boxShadow: 10 10 14 rgb(157, 154, 154), -8 -8 14 rgb(255, 255, 249),
                overflowY: 'scroll'
            }}
        >{transactions.map( (transaction) => <Transaction key={transaction.id} id={transaction.id} text={transaction.text} amount={transaction.amount} />)}
        </div><br />
    </div>
  )
}

export default Transactions