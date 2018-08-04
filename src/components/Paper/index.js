import React from 'react'
import './index.css'

function Paper({children, type, onClick}){
    return(
        <div className={`paper paper-${type}`} onClick={type === 'card' ? onClick : false}>
            {children}
        </div>
    )
}

export default Paper