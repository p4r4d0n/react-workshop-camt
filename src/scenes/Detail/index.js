import React, {Component} from 'react'
import Paper from '../../components/Paper';
import Card from '../../components/Card';
import './index.css'
import Button from '../../components/Button';
import Modal from 'react-modal';

export default class Detail extends Component {

    state = {
        movie : {},
        modalIsOpen: false,
    }

    componentDidMount() {
        let {params} = this.props.match
        this.fetchMovie(params.id)
    }
    
    fetchMovie = (id) => {
        fetch(`https://workshop-movie-api.herokuapp.com/movies/${id}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                this.setState({
                    movie: json.movie
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#f00';
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
        
    }

    render(){
        let {movie} = this.state
        let {match} = this.props
        let customStyles = {
            content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
          }
        }
        return (
            <div className="movie-detail-container">
                <Paper type="detail" key={match.id}>
                    <Card
                        name={movie.name}
                        rated={movie.rated}
                        released={movie.released}
                        id={movie.id}
                        image={movie.image}
                        background="#F7F7F7"
                    />
                    <div className="movie-detail-content">
                        <p>
                            <b>Released On</b>
                            <br/>
                            <span>{movie.released}</span>
                        </p>
                        <p>
                            <b>Director</b>
                            <br/>
                            <span>{movie.director}</span>
                        </p>
                        <p>
                            <b>Star</b>
                            <br/>
                            <span>{movie.stars && movie.stars.join(", ")}</span>
                        </p>
                        <p>
                            <b>Reviewer</b>
                            <br/>
                            <span>{movie.reviewers} users</span>
                        </p>
                        <div className="movie-detail-button">
                            <Button color="danger" name="View Detail" onClick={this.openModal}/>
                            <Button color="grey" name="Back" onClick={this.closeModal}/>
                        </div>
                    </div>
                </Paper>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.state.afterOpenModal}
                    onRequestClose={this.state.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    <button onClick={this.closeModal}>close</button>
                    <div>{movie.description}</div>
                </Modal>
            </div>
        )
    }
    
}