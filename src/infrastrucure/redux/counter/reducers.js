import { INCREMENT_COUNTER,DECREMENT_COUNTER } from "./actions";


const initState = {value:0}
export const counter = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return Object.assign({}, state.value+1, action);
        case DECREMENT_COUNTER:
            return Object.assign({}, state.value-1, action);
        default:
            return state;
    }
}



// const initState = {value:"默认值"}

// export const reduxDemoReducer = (state=initState,action)=>{
//     console.log("reducer:",state,action)
//     switch (action.type) {
//         case "SEND ACTION":
//             return Object.assign({}, state, action);
//         default:
//             return state;
//     }
// }

