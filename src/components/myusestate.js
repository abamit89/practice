import {useState} from 'react';

export default function Myusestate(){
    const [counter, setCounter] =useState(0);
    return(
        <>
            <h1>My Counter {counter}</h1> 
            <button onClick={()=>setCounter(counter+1)}>Increase</button>   
        </>
    )
}