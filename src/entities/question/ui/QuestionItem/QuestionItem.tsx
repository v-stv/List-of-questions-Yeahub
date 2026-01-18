import styles from './QuestionItem.module.css'
import { useState } from 'react'
import { ArrowRight, Chevron } from '@/shared/assets'
import type { Question } from '../../model/types'
import QuestionMetrics from '../QuestionMetrics/QuestionMetrics'
import { CustomLink } from '@/shared/ui/CustomLink'
import { Button } from '@/shared/ui/Button'

type Props = {
    question: Question
}

const QuestionItem = (props: Props) => {
    const {
        question: { id, title, rate, complexity, shortAnswer },
    } = props

    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen((prev) => !prev)
    }

    return (
        <li key={id} className={styles.listItem}>
            <Button type={'button'} className={styles.itemButton} onClick={toggleOpen}>
                <h3 className={styles.title}>{title}</h3>
                <Chevron
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`.trim()}
                />
            </Button>
            <div className={`${styles.content} ${isOpen ? styles.open : ''}`.trim()}>
                <QuestionMetrics rate={rate} complexity={complexity} />
                {shortAnswer}
                <CustomLink link={`question/${id}`}>
                    Подробнее
                    <ArrowRight />
                </CustomLink>
            </div>
        </li>
    )
}

export default QuestionItem
