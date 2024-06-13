import React, {FC} from 'react'
import { Result, Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { MANAGE_INDEX_PATHNAME } from '../router'

const NotFound: FC = () => {
    const nav = useNavigate()
    return (
        <Result status='404' title='404' subTitle="Sorry, the page doesn't exist"
        extra={<Button type='primary' onClick={()=> nav(MANAGE_INDEX_PATHNAME)}>Return to the Home Page</Button>}></Result>
    )
}

export default NotFound