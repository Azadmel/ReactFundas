import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'Mehul'
        }
    }

    componentDidMount() {
        // every 2 seconds call the setState method with the same state as before
        setInterval(()=> {
            this.setState({
                name: 'Mehul'
            })
        },2000)
    }
    
    render() {
        return (
            <div>
                Parent component
                <RegularComp name='Mehul'/>
                <PureComp name='Mehul'/>
            </div>
        )
    }
}

export default ParentComp
