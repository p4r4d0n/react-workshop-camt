import React, {Component} from 'react'
import Rating from '../Rating'
import './index.css'

export default class Card extends Component{

    render(){
        let props = this.props
        return (
            <div className="card" style={{backgroundColor: props.background}}>
                <div className="card-header">{props.name}</div>
                <span style={{ fontSize: '0.7em' }}>{props.released}</span>
                <br/>
                <img className="card-thumbnail" src={props.image} alt="thumbnail"/>
                <Rating rated={props.rated}/>
            </div>
        )
    }
    
}