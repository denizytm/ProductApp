import React from 'react'
import { useGetUsers } from '../hooks/useGetUsers'
import { useNavigate } from 'react-router-dom';

export const UserList = () => {
    
    const users = useGetUsers();
    
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/admin/users/edit/${id}`);
    }

    if(users.length)
    return (
      <div>
        <ul>
            {users.map(user=>(
                <li>
                    <p>
                        {user.nickname}
                        <button onClick={()=>{
                            handleClick(user.id);
                        }}  > See Details </button>
                    </p>
                </li>
            ))}
        </ul>
    </div>
    )
    return (<div>Loading...</div>)
}
