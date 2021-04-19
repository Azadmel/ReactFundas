import React from 'react'

function NameList() {
    const names = ['Mehul', 'Chi', 'Angel']

    return (
        <div>
            {
                // inside curly braces because this javascrip exp needs to be evaluated
                // the map method transforms each element of names array to jsx.
                names.map(name => <h2>{name}</h2>)
            }       
        </div>
    )
}

export default NameList
