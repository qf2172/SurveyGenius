import React, {FC, useState} from 'react'
import { useTitle } from 'ahooks'
import { Typography, Empty, Table, Tag, Button, Space, Modal } from 'antd'
import styles from './common.module.scss'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal 
const rawQuestionList = [
    {_id: 'q1', title: 'questionform1', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q2', title: 'questionform2', isPublished: false, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q3', title: 'questionform3', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
]

const Trash: FC = () => {
    useTitle('Star Survey List')
    const [questionList, setQuestionList] = useState(rawQuestionList)
    const [selectedIds, setSelectedIds] = useState<string[]>([])
    function del () {
        confirm({
            title: "Are you sure to delete the survey?",
            icon: <ExclamationCircleOutlined />,
            content: "You can't find it after you delete it",
            onOk: () => alert("delete ${JSON.stringify(selectedIds)}"),
        })
    }
    const tableColumns = [
        {
            title: 'title',
            dataIndex: 'title'
        },
        {
            title: 'isPublished',
            detaIndex: 'isPublished',
            render: (isPublished: boolean) => 
                {
                    return isPublished? <Tag color='processing'>Published</Tag>: <Tag>Unpublished</Tag>}
        },
        {
            title: 'answerCount',
            dataIndex: 'answerCount'
        },
        {
            title: 'createAt',
            dataIndex: 'createAt'
        }
    ]
    const TableElem = <>
    <div style={{ marginBottom: '16px'}}>
        <Space>
            <Button type='primary' disabled={selectedIds.length === 0}>Retrieve</Button>
            <Button danger disabled={selectedIds.length == 0} onClick={del} >Delete</Button>
        </Space>
    </div>
    <Table dataSource={questionList} columns={tableColumns} pagination={false} rowKey={q=>q._id}  rowSelection={{type: 'checkbox', onChange: selectedRowKeys => {
                setSelectedIds(selectedRowKeys as string[])
            }}}/>
    </>
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>Trash Survey List</Title>
            </div>
            <div className={styles.right}>
                <h1>search</h1>
            </div>
        </div>
        <div className={styles.content}>
            {questionList.length === 0 && <Empty description="there is no star survey now"/>}
            {questionList.length > 0 && TableElem}
        </div>
        <div className={styles.footer}>pagination</div>

        </>
    )
}

export default Trash