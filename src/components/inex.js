import React, {useContext} from 'react'
import { TrackerContext } from '../context/globalState'

const Inex = () => {
  const { transactions, curr } = useContext(TrackerContext);

  const amount = transactions.map(el => Number(el.amount));
  let great = amount.filter((el) => el>0);
  const income = great.reduce((a,b)=> (a +=b), 0);

  let less = amount.filter((el) => el<0);
  const expense = less.reduce((a,b)=> (a +=b), 0);

  return (
    <div style={{alignItems:'center', justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
        <div style={{ color: 'green', textAlign: 'center', width:300, boxShadow: "1px 3px 1px #9e9e9e, -1px -3px 1px #fef"}}>
            <p>Income</p>
            <h3>{curr}{income}</h3>
        </div>&nbsp;&nbsp;&nbsp;
        <div style={{ color: 'red', textAlign: 'center', width:300, boxShadow: "1px 3px 1px #fef, -1px -3px 1px #9e9e9e"}}>
            <p>Expense</p>
            <h3>{curr}{expense}</h3>
        </div>
    </div>
  )
}

export default Inex