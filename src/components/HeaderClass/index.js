import React, {Component} from 'react'

class Header extends Component {
    state = {
        name: 'Home'
    }

    componentDidMount(){
        console.log('เรียก')
    }

    componentDidUpdate() {
        console.log('อัพเดท')
    }

    changeHeader = () => {
        this.setState({
            name: 'About'
        })
    }

    render() {
        return (
            <div>
                <p>Header</p>
                <button onClick={this.changeHeader}>Button</button>
            </div>
        )
    }
}

export default Header