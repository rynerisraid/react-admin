
const initState = {
    count:1
}

//reducer 要就接收Action，然后进行逻辑处理
//判断Action是否我们所需要
//如果是，那么return 一个新的state
export const plusOne = (state=initState,action)=>{
    console.log('reducer:',action)
    switch (action.type) {
        case 'ADD ACTION':
            return {
                count: state.count+1
            };
        default:
            return state;
    }
}