import React,{useState} from 'react'

export default function StatesInFunctionalComponent() {
    let [count,updateCount]=useState(0)
    return (
        <div>
            <h1 onMouseOver={()=>{updateCount(count+1)}}
            onMouseLeave={()=>{updateCount(count=0)}}>

                {count}
            </h1>
            <button onClick={()=>{
                updateCount(
                    count+1)
            }}>incremented</button>
        </div>
    )
}
