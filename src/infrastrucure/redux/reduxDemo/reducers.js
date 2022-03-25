
const initState = {value:"默认值"}

export const reduxDemoReducer = (state=initState,action)=>{
    console.log("reducer:",state,action)
    switch (action.type) {
        case "SEND ACTION":
            return Object.assign({}, state, action);
        default:
            return state;
    }
}

