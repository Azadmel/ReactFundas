import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username : ''
        }
    }
    
    usernameChangeHandler = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    render() {
        return (
            <form>
                <label>username</label>
                <input type='text' value={this.state.username} onChange={this.usernameChangeHandler}></input>
            </form>
        )
    }
}

export default Form
