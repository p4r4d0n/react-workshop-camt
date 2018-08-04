import React from 'react'
import {Route} from 'react-router-dom'
import Movie from '../Movie'
import Login from '../Login'
import Detail from '../Detail';

export default function Routes({ userNameSubmit }){
    return (
        <div>
            <Route exact path="/" render={() => <Login userNameSubmit={userNameSubmit}/>}/>
            <Route exact path="/movie" component={Movie}/>
            <Route exact path="/movie/:id" component={Detail}/>
        </div>
    )
}