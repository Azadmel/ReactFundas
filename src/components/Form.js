import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username : '',
            comments : ''
        }
    }
    
    // event binding using class property approach
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    render() {
        return (
            <form>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                <label>comments</label>
                <input type='textarea' value={this.state.comments} onChange={this.handleCommentsChange}></input>
            </form>
        )
    }
}

export default Form
