import React from 'react'

export default function UserData(props) { 
    return (
        <ul> 
            <li>{props.test.email}</li>
            <li>{props.test.username}</li>
        </ul>
  )
}
