const trackerProvider = (state, action) =>{
    switch(action.type){
        case 'PUSH':
        return{
            ...state,
            transactions: [action.payload, ...state.transactions]
                
        }

        case 'REMV':
        return{
            ...state,
            transactions: state.transactions.filter(el => el.id !== action.payload)
            // transactions: state.transactions.map((el) => {
            //     const elem = el.id === action.payload;
            //     return(
            //         elem.delete()
            //     )
            // })
        }

        default: return state;
    }
}
export default trackerProvider;
