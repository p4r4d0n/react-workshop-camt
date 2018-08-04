import React, {Component} from 'react'
import Field from '../../components/Field'
import Paper from '../../components/Paper'
import Button from '../../components/Button'
import { withRouter } from 'react-router-dom'
import './index.css'

export default withRouter(class Login extends Component {

    state = {
        isValid: false,
        userName: ''
    }

    onUserNameChange = event => {
        let value = event.target.value

        this.setState({
            userName: value,
            isValid: value ? true : false
        })

    }

    onSubmit = () => {
        let {history, userNameSubmit} = this.props
        let {isValid, userName} = this.state

        if(isValid) {
            userNameSubmit(userName)
            history.push({
                pathname: '/movie',
              })
        }
    }

    render(){
        return (
            <div className="login-container">
                <Paper type="login">
                    <h3>หน้า Login</h3>
                    <Field onChange={this.onUserNameChange} value={this.state.userName}/>
                    <p style={{color: 'red'}}>{ (!this.state.isValid) ? 'Field Required' : '' }</p>
                    <Button name="Login" color="danger" onClick={this.onSubmit}/>
                </Paper>
            </div>
            )
    }

})