import styles from './QuestionItemSkeleton.module.css'

const QuestionItemSkeleton = () => {
    return (
        <li className={styles.listItem}>
            <div className={styles.itemButton}>
                <div className={styles.titleSkeleton}></div>
                <div className={styles.chevronSkeleton}></div>
            </div>
        </li>
    )
}

export default QuestionItemSkeleton
