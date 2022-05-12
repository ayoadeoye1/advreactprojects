import { createContext, useReducer, useState } from 'react'
import trackerProvider from './trackerProvider'

const initialState = ({
    transactions: [
        {id: 1, text: "gift", amount: 1000},
        {id: 2, text: "T-fare", amount: -15000},
        {id: 3, text: "food stuffs", amount: -12000},
        {id: 4, text: "stillpends", amount: 30000}
    ]
})


export const TrackerContext = createContext(initialState)


export const TrackerProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(trackerProvider, initialState)

    const [add, setAdd] = useState(false)

    const addFunc = () =>{
       return(
        setAdd((prevState) => !prevState)
       )
    }

    const [curr, setCurr] = useState()

    const currFunc = (e) =>{
        setCurr(e.target.value)
    }

    const pushFunc = (e) =>{
        dispatch({
            type: 'PUSH',
            payload: { id: Date.now(), text: e.target.text.value, amount: Number(e.target.amount.value) }
        })
        setAdd((prevState) => !prevState)
    }

    const removeFunc = (id) =>{
        dispatch({
            type: 'REMV',
            payload: id
        })
    }

    return(
        <TrackerContext.Provider value={{ transactions: state.transactions, add: add, addFunc, curr, currFunc, pushFunc, removeFunc }}>
            {children}
        </TrackerContext.Provider>
    )
}