import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATHNAME } from '../router'

const UserInfo: FC = () => {
    return (
        <>
            <Link to={LOGIN_PATHNAME}>login</Link>
        </>
    )
}

export default UserInfo