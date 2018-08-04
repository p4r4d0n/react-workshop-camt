import React from 'react'
import Item from '../Item'

export default function List({items}){

    return (
            <div>
                { items.map((value, key) => (<Item key={key} value={value}/>))}
            </div>
        )
}
