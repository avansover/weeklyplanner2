import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                
                <div><input placeholder={'user name'} disabled></input></div>
                <div><input placeholder={'password'} disabled></input></div>
                <div><button onClick={()=>this.props.login()}>enter</button></div>

            </div>
        )
    }
}
