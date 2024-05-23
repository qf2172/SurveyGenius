import React, {FC , useState} from 'react'
import QuestionCard from '../components/QuestionCard'
import styles from './List.module.scss'
const rowQuestionList = [
    {_id: 'q1', title: 'questionform1', isPublished: true, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q2', title: 'questionform2', isPublished: false, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q3', title: 'questionform3', isPublished: true, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q4', title: 'questionform4', isPublished: false, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
    {_id: 'q5', title: 'questionform5', isPublished: true, isStar: false, answerCount: 5, createAt: 'Mar 10 13:22pm'},
]
const List: FC = () => {
    const [questionList, setQuestionList] = useState(rowQuestionList)
    return (
        <>
        <div className={styles.header}>
            <div className={styles.left}>
                <h1>My Survey List</h1>
            </div>
            <div className={styles.right}>
                <h1>search</h1>
            </div>
        </div>
        <div className={styles.content}>
            {questionList.map(question => {
                const {_id} = question
                return <QuestionCard key={_id} {...question}/>
            })}
        </div>
        <div className={styles.footer}>Pagination</div>
        </>
)
}

export default List