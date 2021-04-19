import React from 'react'
import Person from './Person'

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

    const jsxPersonsList = persons.map(person => <Person person={person}/>)

    return (
        <div>
            {jsxPersonsList}
        </div>
    )
}

export default PersonList
