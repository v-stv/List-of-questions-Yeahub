import styles from './QuestionsListSkeleton.module.css'
import { QuestionItemSkeleton } from '@/entities/question'

const QuestionsListSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleSkeleton}></div>
            <ul className={styles.list}>
                {Array.from({ length: 10 }).map((_, index) => (
                    <QuestionItemSkeleton key={index} />
                ))}
            </ul>
        </div>
    )
}

export default QuestionsListSkeleton
