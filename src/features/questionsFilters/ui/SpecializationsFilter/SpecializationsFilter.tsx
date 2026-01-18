import styles from './SpecializationsFilter.module.css'
import { FilterLayout } from '@/shared/ui/FilterLayout'
import { Button } from '@/shared/ui/Button'
import { ErrorMessage } from '@/shared/ui/ErrorMessage'
import { EmptyState } from '@/shared/ui/EmptyState'
import { useDispatch } from 'react-redux'
import SpecializationsFilterSkeleton from './SpecializationsFilterSkeleton'
import { DEFAULT_SHOW_SPECIALIZATIONS_LIMIT } from '../../config/constants'
import { toggleLimit } from '../../lib/toggleLimit'
import { getId, useAppSelector } from '@/shared/lib'
import {
    setLimitSpecializations,
    toggleSelectSpecialization,
} from '../../model/questionsFiltersSlice'
import {
    selectLimitSpecializations,
    selectSpecialization,
} from '../../model/questionsFiltersSelectors'
import {
    type Specialization,
    SpecializationItem,
    useFetchSpecializationsQuery,
} from '@/entities/specialization'

const SpecializationsFilter = () => {
    const limit = useAppSelector(selectLimitSpecializations)
    const selectSpecializations = useAppSelector(selectSpecialization)
    const dispatch = useDispatch()
    const queryParams = { limit }
    const {
        data: specializationsResponse,
        error,
        isLoading,
        refetch,
    } = useFetchSpecializationsQuery(queryParams)

    if (error) return <ErrorMessage onRetry={refetch} />
    if (isLoading) return <SpecializationsFilterSkeleton />
    if (!specializationsResponse || specializationsResponse.data.length === 0)
        return <EmptyState description={'Попробуйте перезагрузить страницу'} />

    const total = specializationsResponse.total
    const specializations = specializationsResponse.data

    const renderItem = (item: Specialization) => <SpecializationItem specialization={item} />

    const handleShowSpecialization = () => {
        const newLimit = toggleLimit(limit, DEFAULT_SHOW_SPECIALIZATIONS_LIMIT, total)
        dispatch(setLimitSpecializations(newLimit))
    }

    return (
        <>
            <FilterLayout
                title="Специализация"
                items={specializations}
                renderItem={renderItem}
                getId={getId}
                selectItemsId={selectSpecializations}
                action={toggleSelectSpecialization}
            />
            <Button type="button" className={styles.button} onClick={handleShowSpecialization}>
                {limit === DEFAULT_SHOW_SPECIALIZATIONS_LIMIT ? 'Показать все' : 'Скрыть'}
            </Button>
        </>
    )
}

export default SpecializationsFilter
