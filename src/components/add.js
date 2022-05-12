import React, {useContext} from 'react'
import { TrackerContext } from '../context/globalState'

const Form = () =>{

const { add, addFunc, pushFunc } = useContext(TrackerContext);



  return(
    <>
      <button style={{ marginTop: 5, marginRight: 5, display: 'flex', float: 'right', borderRadius: 15}} onClick={()=> addFunc(()=> !add)} >close</button><br />
      <form onSubmit={(e)=>{ e.preventDefault(); pushFunc(e) }} style={{ margin: 15, textAlign: 'center', paddingTop: 5, }} >
        <input style={{ boxShadow: "inset 1px 3px 1px #fff, inset -1px -3px 1px #000", margin: 10, height: 40, width: 200, borderRadius: 30 }} type='text' name='text' placeholder='input text' /><br />
        <input style={{ boxShadow: "inset 1px 3px 1px #000, inset -1px -3px 1px #fff", margin: 10, height: 40, width: 200, borderRadius: 30 }} type='number' name='amount' placeholder='input amount' /><br />
        <input style={{ margin: 10, height: 40, width: 200, borderRadius: 30, backgroundColor: 'blue', color: 'white' }} type='submit'  value='submit' />
      </form>
    </>
  )
}

const Add = () => {

const { add, addFunc } = useContext(TrackerContext)
const { currFunc } = useContext(TrackerContext)


  return (
    <div style={{ display: 'flex', height: 60}}>
        <div style={{ width:300, boxShadow: "1px 3px 1px #9e9e9e"}}>
            <span style={{marginLeft: 15}}>select currency</span>
            <select defaultValue={'select'} onChange={(e) => currFunc(e)} style={{marginLeft: 15}}>
              <option value='select' disabled>choose currency</option>
              <option value='#'>Nigeria Naira</option>
              <option value='$'>US Doller</option>
              <option value='R$'>Brazil Real</option>
              <option value='£'>Egypt Pound</option>
              <option value='₹'>Indai Rupee</option>
              <option value='₪'>Isreal Shekel</option>
              <option value='₩'>South Korean Won</option>
            </select>
        </div>
        <div style={{ width:300, boxShadow: "1px 3px 1px #9e9e9e"}}>
           {add ? 
            <div
            style={{display: 'block', top: 0, bottom: 0, right: 0, left: 0, heigth: '100%', width: '100%', position: 'fixed', backgroundColor: 'rgba(0,0,0,0.3)'}}
            >
              <div style={{ borderRadius: 15, boxShadow: '4px, 4px, 6px, #000', marginLeft: 'auto', marginRight: 'auto', marginTop: 50, width: 300, height: 300, backgroundColor: 'whitesmoke' }} >
                <Form />
              </div>
            </div>: ''
           }
            <button onClick={addFunc} style={{ marginLeft: '45%', fontSize: 50, fontSide: '1000%', height: 60, borderRadius: 50, backgroundColor: 'blue', color: '#fff', }} >+</button> 
            {/* onClick={ ()=> currency() } */}
        </div>
    </div>
  )
}

export default Add