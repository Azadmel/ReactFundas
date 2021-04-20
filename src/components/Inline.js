import React from 'react'

function Inline() {

    //object representing css. the css props need to be camelCase
    const heading = {
        fontSize : '72px',
        color: 'pink'
    }

    return (
        <div>
            <h1 style={heading}>Inline</h1>
        </div>
    )
}

export default Inline
