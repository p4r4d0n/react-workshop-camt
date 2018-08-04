import React from 'react'
import './index.css'

export default function Header({userName}) {
    return (<div className="header">
        <div className="brand">
            <span>Top 10 IMDB movies</span>
            <span className="username">{userName && `Hello, ${userName}`}</span>
        </div>
    </div>)
}