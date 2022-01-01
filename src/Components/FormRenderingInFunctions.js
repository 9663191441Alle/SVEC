import React,{useState} from 'react'

export default function FormRenderingInFunctions() {
    let initialData={
        uname:"",
        pword:""
    }
    let [values,updateValues]=useState(initialData);
    const changeUserName=(event)=>{
        updateValues({
           ...values, uname:event.target.value
        })
    }

    const changePassword=(event1)=>{
        updateValues({
           ...values, pword:event1.target.value
        })
    }
   const submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${values.uname} ${values.pword}`)

    }



    return (
        <div>
             <form onSubmit={submitUserData} method='get'>
                    <input type="text" value={values.uname}
                    
                    onChange={changeUserName} placeholder='name:'
                    />
                    <br></br>
                    <input type="password" value={values.pword}
                    
                    onChange={changePassword} placeholder='password'
                    />
                    <br></br>
                    <button type="submit">login</button>
                </form>
        </div>
    )
}
