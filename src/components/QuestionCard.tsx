import React, {FC} from 'react'
import styles from './QuestionCard.module.scss'
import { Button, Divider, Modal, Popconfirm, Space, Tag, message } from 'antd'
import { CopyOutlined, DeleteOutlined, EditOutlined, ExclamationCircleOutlined, LineChartOutlined, StarOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'

const {confirm} = Modal
type PropsType = {
    _id:string,
    title:string,
    isStar: boolean,
    isPublished: boolean,
    answerCount: number,
    createAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
    const nav = useNavigate()
    const {_id, title, createAt, answerCount, isPublished, isStar} = props
    function copy() {
       message.success("copied")
    }
    function del() {
        confirm({
            title: "are you sure to delete the survey",
            icon: <ExclamationCircleOutlined />,
            onOk: () => message.success("already delete")
        })
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <Link to={isPublished? '/question/stat/${_id}' : '/question/edit/${_id}'}>
                        <Space>
                            {isStar && <StarOutlined style={{ color: 'red'}} />}
                            {title}
                        </Space>
                    </Link>
                </div>
                <div className={styles.right}>
                    <Space>
                        {isPublished? <Tag color='processing'>Published</Tag>: <Tag>Unpublished</Tag>}
                        <span>{answerCount}</span>
                        <span>{createAt}</span>
                    </Space>
                </div>
            </div>
            <Divider style={{ margin: '12px 0'}}/>
            <div className={styles['button-container']}>
                <div className={styles.left}>
                    <Space>
                        <Button icon={<EditOutlined />} type='text' size='small' onClick={() => nav('/question/edit/${_id}')}>Edit</Button>
                        <Button icon={<LineChartOutlined />} type='text' size='small' onClick={() => nav('/question/stat/${_id}')} disabled={!isPublished}>Stat</Button>
                    </Space>
                </div>
                <div className={styles.right}>
                    <Space>
                        <Button type='text' icon={<StarOutlined />} size='small'>
                            {isStar? 'cancel star': 'star'}
                        </Button>
                        <Popconfirm title="copy or cancel" okText="copy" cancelText="calcel" onConfirm={copy}>
                            <Button type='text' icon={<CopyOutlined />} size='small'>copy</Button>
                        </Popconfirm>
                        <Button type='text' icon={<DeleteOutlined />} size='small' onClick={del}>delete</Button>
                    </Space>
                </div>
            </div>
        </div>
        </>
)
}

export default QuestionCard