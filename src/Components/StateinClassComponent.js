import React, { Component } from 'react'
import "./States.css"
export default class StateinClassComponent extends Component {

   constructor(props) {
       super(props)
   
       this.state = {
            name:"Chamundi",
            count:0
       }
   }
   
    
    render() {
        setTimeout(()=>{
            this.setState({
                name:"Chamu"
            })
        },2000)
            
        return (
            <div className='demo'>
               <h1> Welcome {this.state.name}</h1>
               <h1>Count:{this.state.count}</h1>
               <button onClick={()=>{
                   this.setState({
                       count:this.state.count+1
                   })
               } }>Increment count</button>

              <button onClick={()=>{
                   this.setState({
                       count:this.state.count-1
                   })
               } }>Decrement count</button>
              <button onClick={()=>{
                   this.setState({
                       count:this.state.count=0
                   })
               } }>Reset</button>
           
            </div>
        )
      
        
    }
}
