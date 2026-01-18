import styles from './QuestionFilters.module.css'
import { useAppSelector, useDebouncedReduxInput } from '@/shared/lib'
import {
    ComplexityFilter,
    RatingFilter,
    selectTitle,
    setTitle,
    SkillsFilter,
    SpecializationsFilter,
} from '@/features/questionsFilters'
import { Input } from '@/shared/ui/Input'

const QuestionFilters = () => {
    const title = useAppSelector(selectTitle)
    const { inputValue, handleChange } = useDebouncedReduxInput({
        reduxValue: title,
        setReduxValue: setTitle,
        delay: 500,
    })

    return (
        <form className={styles.filters}>
            <Input
                className={styles.input}
                value={inputValue}
                type={'text'}
                placeholder={'Введите запрос...'}
                onChange={handleChange}
            />
            <SpecializationsFilter />
            <SkillsFilter />
            <ComplexityFilter />
            <RatingFilter />
        </form>
    )
}

export default QuestionFilters
