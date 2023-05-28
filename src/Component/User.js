import React from 'react'
import { useSelector } from 'react-redux';

const UserAuth = () => {
    const isUser = useSelector(state => state.userReducers.user)
    return (
        <div className='border p-3'>
            <span className='bg-light rounded p-2 mx-4'>USER = {isUser ? isUser : "No User"}</span>
        </div>
    )
}

export default UserAuth;