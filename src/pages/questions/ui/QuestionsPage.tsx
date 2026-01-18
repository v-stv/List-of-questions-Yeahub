import styles from './QuestionsPage.module.css'
import { QuestionFilters, QuestionsList } from '@/widgets/question'
import { useQuestionsUrlSync } from '../lib/useQuestionsUrlSync'

const QuestionsPage = () => {
    useQuestionsUrlSync()

    return (
        <main className={styles.main}>
            <QuestionsList />
            <QuestionFilters />
        </main>
    )
}

export default QuestionsPage
