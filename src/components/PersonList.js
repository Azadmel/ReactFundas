import React from 'react'

function PersonList() {

    const persons = 
    [
        {
            id: 1,
            name: 'Mehul',
            skill: 'React'
        },
        {
            id: 2,
            name: 'Chi',
            skill: 'Node'
        }
    ]

    const jsxPersonsList = persons.map(person => <h2>I am {person.name} and I know {person.skill}</h2>)

    return (
        <div>
            {jsxPersonsList}
        </div>
    )
}

export default PersonList
