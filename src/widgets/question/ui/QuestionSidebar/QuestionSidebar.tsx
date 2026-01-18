import styles from './QuestionSidebar.module.css'
import { type Question, QuestionMetrics } from '@/entities/question'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { type Skill, SkillItem } from '@/entities/skill'
import { setKeywords, toggleSelectSkill } from '@/features/questionsFilters'
import { FilterLayout } from '@/shared/ui/FilterLayout'
import { getId } from '@/shared/lib'
import { KeywordItem } from '@/shared/ui/KeywordItem'

type Props = {
    question: Question
}

const QuestionSidebar = (props: Props) => {
    const {
        question: { rate, complexity, questionSkills, keywords },
    } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const renderKeyword = (item: string) => <KeywordItem keyword={item} />
    const renderSkill = (item: Skill) => <SkillItem skill={item} />

    const handleClick = (value: string | number) => {
        if (typeof value === 'string') {
            dispatch(setKeywords(value))
        } else {
            dispatch(toggleSelectSkill(value))
        }
        navigate('/')
    }

    return (
        <div className={styles.sidebar}>
            <section>
                <p>Уровень:</p>
                <QuestionMetrics rate={rate} complexity={complexity} />
            </section>
            <FilterLayout
                title="Навыки:"
                items={questionSkills}
                renderItem={renderSkill}
                getId={getId}
                action={toggleSelectSkill}
                onItemClick={handleClick}
            />
            <FilterLayout
                title="Ключевые слова:"
                items={keywords}
                renderItem={renderKeyword}
                action={setKeywords}
                onItemClick={handleClick}
            />
        </div>
    )
}

export default QuestionSidebar
