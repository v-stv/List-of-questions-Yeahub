import styles from './QuestionSpecific.module.css'
import QuestionSidebar from '../QuestionSidebar/QuestionSidebar'
import { useParams } from 'react-router-dom'
import { useFetchQuestionByIdQuery } from '@/entities/question'
import QuestionSpecificSkeleton from './QuestionSpecificSkeleton'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { EmptyState } from '@/shared/ui/EmptyState'
import { Section } from '@/shared/ui/Section'

const QuestionSpecific = () => {
    const { questionId } = useParams()
    const { data: question, error, isLoading, refetch } = useFetchQuestionByIdQuery(questionId)

    if (isLoading) return <QuestionSpecificSkeleton />
    if (!question) return <EmptyState />
    if (error) return <ErrorMessage onRetry={refetch} />

    const { imageSrc, title, description, shortAnswer, longAnswer } = question

    return (
        <div className={styles.content}>
            <article>
                <Section>
                    <img
                        src={imageSrc ? imageSrc : '/src/shared/assets/images/questionAlt.png'}
                        alt="image"
                    />
                    <div>
                        <h1>{title}</h1>
                        <p>{description}</p>
                    </div>
                </Section>
                <Section type={'answer'}>
                    <h3 className={styles.h3}>Краткий ответ</h3>
                    {shortAnswer}
                </Section>
                <Section type={'answer'}>
                    <h3 className={styles.h3}>Полный ответ</h3>
                    {longAnswer}
                </Section>
            </article>
            <QuestionSidebar question={question} />
        </div>
    )
}

export default QuestionSpecific
