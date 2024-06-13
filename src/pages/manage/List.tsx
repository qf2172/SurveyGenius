import React, {FC , useState} from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
//import { useSearchParams } from 'react-router-dom'
import { useTitle } from 'ahooks'
import { Typography } from 'antd'
import ListSearch from '../../components/ListSearch'

const { Title } = Typography
const rowQuestionList = [
    {_id: 'q1', title: 'questionform1', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q2', title: 'questionform2', isPublished: false, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q3', title: 'questionform3', isPublished: true, isStar: true, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q4', title: 'questionform4', isPublished: false, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q5', title: 'questionform5', isPublished: true, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
]
const List: FC = () => {
    //const [serachParams] = useSearchParams()
    useTitle('my servey list')
    const [questionList, setQuestionList] = useState(rowQuestionList)
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <Title level={3}>My Survey List</Title>
            </div>
            <div className={styles.right}>
                <ListSearch />
            </div>
        </div>
        <div className={styles.content}>
            {questionList.map(question => {
                const {_id} = question
                return <QuestionCard key={_id} {...question}/>
            })}
        </div>
        <div className={styles.footer}>Scroll Up to Load More</div>
        </>
)
}

export default List