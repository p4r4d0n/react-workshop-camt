import React, {Component} from 'react'

class ToggleView extends Component {
    state = {
        isShow: true
    }

    componentDidMount(){
        console.log('เรียก "kuy"')
    }

    componentDidUpdate() {
        console.log('อัพเดท ไอ่สัส')
    }

    toggleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.isShow ? ('True') : ('False')}</p>
                <button onClick={this.toggleShow}>Button</button>
            </div>
        )
    }
}

export default ToggleView