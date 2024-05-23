import React, {FC} from 'react'
import styles from './QuestionCard.module.scss'

type PropsType = {
    _id:string,
    title:string,
    isStar: boolean,
    isPublished: boolean,
    answerCount: number,
    createAt: string
}
const QuestionCard: FC<PropsType> = (props: PropsType) => {
    const {_id, title, createAt, answerCount, isPublished} = props
    return (
        <>
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.left}>
                    <a href=''>{title}</a>
                </div>
                <div className={styles.right}>
                    {isPublished? <span style={{color:'green'}}>Published</span>: <span>Unpublished</span>}
                    &nbsp;
                    <span>{answerCount}</span>
                    <span>{createAt}</span>
                </div>
            </div>
            <div className={styles['button-container']}>
                <div className={styles.left}>
                    <button>Edit</button>
                    <button>Statistic</button>
                </div>
                <div className={styles.right}>
                    <button>star</button>
                    <button>copy</button>
                    <button>delete</button>
                </div>
            </div>
        </div>
        </>
)
}

export default QuestionCard