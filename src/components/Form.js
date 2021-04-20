import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username : '',
            comments : '',
            topic : 'react'
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

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    render() {
        return (
            <form>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
                <label>comments</label>
                <input type='textarea' value={this.state.comments} onChange={this.handleCommentsChange}></input>
                <label>topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value='react'>react</option>
                    <option value='angular'>angular</option>
                    <option value='vue'>vue</option>
                </select>
            </form>
        )
    }
}

export default Form
