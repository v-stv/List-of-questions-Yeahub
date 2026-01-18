import styles from './SkillsFilter.module.css'
import { useDispatch } from 'react-redux'
import { type Skill, SkillItem, useFetchSkillsQuery } from '@/entities/skill'
import { setLimitSkills, toggleSelectSkill } from '../../model/questionsFiltersSlice'
import { DEFAULT_SHOW_SKILLS_LIMIT } from '../../config/constants'
import { selectLimitSkills, selectSkill } from '../../model/questionsFiltersSelectors'
import { getId, useAppSelector } from '@/shared/lib'
import { FilterLayout } from '@/shared/ui/FilterLayout'
import { toggleLimit } from '../../lib/toggleLimit'
import { Button } from '@/shared/ui/Button'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { EmptyState } from '@/shared/ui/EmptyState'
import SkillsFilterSkeleton from '../SkillsFilter/SkillsFilterSkeleton'

const SkillsFilter = () => {
    const limit = useAppSelector(selectLimitSkills)
    const selectSkills = useAppSelector(selectSkill)
    const dispatch = useDispatch()
    const queryParams = { limit }
    const { data: skillsResponse, error, isLoading, refetch } = useFetchSkillsQuery(queryParams)

    if (error) return <ErrorMessage onRetry={refetch} />
    if (isLoading) return <SkillsFilterSkeleton />
    if (!skillsResponse || skillsResponse.data.length === 0)
        return <EmptyState description={'Попробуйте перезагрузить страницу'} />

    const total = skillsResponse.total
    const skills = skillsResponse.data

    const renderItem = (item: Skill) => <SkillItem skill={item} />

    const handleShowSkills = () => {
        const newLimit = toggleLimit(limit, DEFAULT_SHOW_SKILLS_LIMIT, total)
        dispatch(setLimitSkills(newLimit))
    }

    return (
        <>
            <FilterLayout
                title="Навыки"
                items={skills}
                renderItem={renderItem}
                getId={getId}
                selectItemsId={selectSkills}
                action={toggleSelectSkill}
            />
            <Button type="button" className={styles.button} onClick={handleShowSkills}>
                {limit === DEFAULT_SHOW_SKILLS_LIMIT ? 'Показать все' : 'Скрыть'}
            </Button>
        </>
    )
}

export default SkillsFilter
