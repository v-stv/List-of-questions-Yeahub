import styles from './QuestionsList.module.css'
import QuestionsListSkeleton from './QuestionsListSkeleton'
import { type Question, QuestionItem, useFetchQuestionsQuery } from '@/entities/question'
import { useAppSelector } from '@/shared/lib'
import { selectQuestionsParams } from '@/features/questionsFilters'
import { QuestionsPagination } from '@/features/questionsPagination'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { EmptyState } from '@/shared/ui/EmptyState'

const QuestionsList = () => {
    const params = useAppSelector(selectQuestionsParams)
    const { data: questionsResponse, error, isLoading, refetch } = useFetchQuestionsQuery(params)

    if (isLoading) return <QuestionsListSkeleton />
    if (error) return <ErrorMessage onRetry={refetch} />
    if (!questionsResponse || questionsResponse.data.length === 0) return <EmptyState />

    const questions = questionsResponse.data

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>Вопросы</h1>
            <ul className={styles.list}>
                {questions.map((question: Question) => (
                    <QuestionItem key={question.id} question={question} />
                ))}
            </ul>
            <QuestionsPagination questionsResponse={questionsResponse} />
        </div>
    )
}

export default QuestionsList
