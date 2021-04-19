import React from 'react'

function NameList() {
    const names = ['Mehul', 'Chi', 'Angel']
    const jsxNameList = names.map(name => <h2>{name}</h2>)

    return (
        <div>
            {jsxNameList}      
        </div>
    )
}

export default NameList
