import React, { useContext} from 'react'
import { TrackerContext } from '../context/globalState'

const Balance = () => {

  const { transactions } = useContext(TrackerContext)
  const { curr } = useContext(TrackerContext)


  const amount = transactions.map((el) => el.amount)
  Number(amount)
  const bal = amount.reduce((acc, curr) =>( acc += curr), 0)

  return (
    <div style={{}}>
        <h3>Balance: {curr}{bal}</h3>
    </div>
  )
}

export default Balance