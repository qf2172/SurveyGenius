import React, {FC ,useState} from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
//import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'

const { Title } = Typography
const rowQuestionList = [
    {_id: 'q1', title: 'questionform1', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q2', title: 'questionform2', isPublished: false, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q3', title: 'questionform3', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
]
const Star: FC = () => {
    useTitle('Star Survey List')
    const [questionList, setQuestionList] = useState(rowQuestionList)
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>Star Survey List</Title>
            </div>
            <div className={styles.right}>
                <h1>search</h1>
            </div>
        </div>
        <div className={styles.content}>
            {questionList.length === 0 && <Empty description="there is no star survey now"/>}
            {questionList.map(question => {
                const {_id} = question
                return <QuestionCard key={_id} {...question}/>
            })}
        </div>
        <div className={styles.footer}>pagination</div>
        </>
    )
}

export default Star