import React from 'react'
import './index.css'

function Button(props) {
    return <button className={`btn btn-${props.color}`} {...props}>{props.name}</button>
}

export default Button