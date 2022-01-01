import React, { Component } from 'react'

export default class FormRendering extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             uname:"",
             pword:""
        }
    }
    
    changeUserName=(event)=>{
        this.setState({
            uname:event.target.value
        })
    }

    changePassword=(event1)=>{
        this.setState({
            pword:event1.target.value
        })
    }
    submitUserData=(event)=>{
        event.preventDefault()
        console.log(`${this.state.uname} ${this.state.pword}`)

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitUserData} method='get'>
                    <input type="text" value={this.state.uname}
                    
                    onChange={this.changeUserName} placeholder='name:'
                    />
                    <br></br>
                    <input type="password" value={this.state.pword}
                    
                    onChange={this.changePassword} placeholder='password'
                    />
                    <br></br>
                    <button type="submit">login</button>
                </form>
            </div>
        )
    }
}
