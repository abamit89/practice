import {useReducer} from 'react';

const mystate = 0;
function reducer(state, action){
    
        if(action.type === "INCREMENT"){
            return state + 1
        }
        else if(action.type === "DECREMENT"){
            return state - 1
        }
    return state;
}

export default function Myusereducer() {

    const [state, dispatch] = useReducer(reducer, mystate)

    function increment(){
        dispatch({type: "INCREMENT"})
    }
    function decrement(){
        dispatch({type: "DECREMENT"})
    }
                                                       
    return(
        <>
            <h1>My Reducer Counter {state}</h1> 
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
}
