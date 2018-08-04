import React from 'react'
import './index.css'

export default function Rating({rated}) {
    return (
        <div className="rating">
            <div className="star"><span className="rating-number">{rated}</span><span> / 10</span></div>
        </div>
    )
}