import React from 'react'
import './index.css'

export default function Field(props) {

        return (
            <div className="form-group">
                <input type="text" className="form" {...props} required/>
            </div>
        )

}