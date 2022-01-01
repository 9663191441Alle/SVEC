import React from 'react'

export default function ListRendering() {
 

// let emplist=["Chamu","Harshitha","Jyothi","Divya"]

let emplist=[
    {
        name:"Chamu",
        salary:30000,
        email:"chamu@gmail.com"
    },
    {
        name:"jyothi",
        salary:30000,
        email:"jyothi@gmail.com"
    },
    {
        name:"harshi",
        salary:30000,
        email:"harshi@gmail.com"
    }
]



    return (
        <div>
            <h1>
                List Rendering
            </h1>
            {/* {
            emplist.map(element =>(
                <h1>{element}</h1>
            )) */}
        {/* } */}
       {
         emplist.map(empdata=>(
             <>
             <p>
                {empdata.name}
             </p>
             <p>{empdata.salary}</p>
             <p>{empdata.email}</p>
             </>
         ))
        }

        </div>
    )
}
