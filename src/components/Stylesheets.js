import React from 'react'
import './myStyles.css'

function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h1 className={className}>Stylesheets</h1>
        </div>
    )
}

export default Stylesheets
