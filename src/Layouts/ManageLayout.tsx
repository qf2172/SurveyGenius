import React, {FC} from 'react'
import { Outlet, useLocation, useNavigate} from 'react-router-dom'
import styles from './ManageLayout.module.scss'
import { Button, Divider, Space } from 'antd'
import { PlusOutlined, BarsOutlined, DeleteOutlined, StarOutlined } from '@ant-design/icons'

const ManageLayout: FC = () => {
    const nav = useNavigate()
    // the path of current page
    const { pathname} = useLocation()
    return (
        <>
        <div className={styles.container}>
           <div className={styles.left}>
            <Space direction='vertical'>
                <Button type='default' size='large' icon={<PlusOutlined />}>Create Survey</Button>
                <Divider style={{ borderTop: 'transparent'}} />
                <Button type={pathname.startsWith('/manage/list') ? 'default' : 'text'} size='large' icon={<BarsOutlined />} onClick={()=>{nav('/manage/list')}}>My Survey</Button>
                <Button type={pathname.startsWith('/manage/star') ? 'default' : 'text'}  size='large' icon={<StarOutlined />} onClick={()=>{nav('/manage/star')}}>Star Survey</Button>
                <Button type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}  size='large' icon={<DeleteOutlined />} onClick={()=>{nav('/manage/trash')}}>Trash Survey</Button>
            </Space>
            </div>
            <div className={styles.right}>
                <Outlet />
            </div> 
        </div>
        
        </>
    )
}

export default ManageLayout