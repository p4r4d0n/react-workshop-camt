import React, { Component } from 'react'
import Routes from './scenes/Route'
import Header from "./components/Header";
import './App.css'

class App extends Component {

  state = {
    userName: ''
  }

  userNameSubmit = userName => {
    this.setState({
      userName: userName
    })
  }

  render() {
    let {userName} = this.state
    return (
      <div>
        <Header userName={userName}/>
        <div className="container">
          <Routes userNameSubmit={this.userNameSubmit}/>
        </div>
      </div>
    )
  }
}

export default App
