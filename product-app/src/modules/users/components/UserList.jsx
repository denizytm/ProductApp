import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export const UserList = () => {
    
    const users = useSelector(state=>state.users.users)
    
    if(users.length)
    return (
      <div>
        <ul>
            {users.map(user=>(
                <li>
                    <p>
                        {user.name}
                    </p>
                </li>
            ))}
        </ul>
    </div>
    )
    return (<div>Loading...</div>)
}
