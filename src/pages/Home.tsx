import React, {FC} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'
import { MANAGE_INDEX_PATHNAME } from '../router'
const { Title, Paragraph } = Typography
import styles from './Home.module.scss'
const Home: FC = () => {
    const nav = useNavigate()
    //function clickHandler() {
      //  nav('/login')
    //}
    return (
        <>
        <div className={styles.container}>
            <div className={styles.info}>
                <Title>Momo Survey | Vote Online</Title>
                <Paragraph>I receive 90 forms</Paragraph>
                <div>
                    <Button type='primary' onClick={()=>{nav(MANAGE_INDEX_PATHNAME)}}>Start to Explore</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home