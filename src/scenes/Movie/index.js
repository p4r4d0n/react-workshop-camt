import React, {Component} from 'react'
import Paper from '../../components/Paper';
import Card from '../../components/Card';
import './index.css'
import {Link} from 'react-router-dom'

export default class Movie extends Component {

    state = {
        movies : []
    }

    componentDidMount() {
        this.fetchMovie()
    }
    
    fetchMovie = () => {
        fetch("https://workshop-movie-api.herokuapp.com/movies")
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    movies: json.movies
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    fetchMovieDetail = id => {
        console.log(id)
        let {history} = this.props
        history.push(`/movie/${id}`)
    }

    render(){
        return (
            <div className="movie-container">
                {this.state.movies.map(val => {
                    return (
                        // <Link className="movie-item" to={`/movie/${val.id}`}>
                            <Paper onClick={() => this.fetchMovieDetail(val.id)} type="card" key={val.id}>
                                <Card 
                                    name={val.name}
                                    rated={val.rated}
                                    released={val.released}
                                    id={val.id}
                                    image={val.image}
                                />
                            </Paper>
                        // </Link>
                        )
                    })}
            </div>
        )
    }
    
}