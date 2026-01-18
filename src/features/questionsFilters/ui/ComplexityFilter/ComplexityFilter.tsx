import { COMPLEXITY_RANGES } from '../../config/constants'
import { getId, useAppSelector } from '@/shared/lib'
import { selectComplexityRanges } from '@/features/questionsFilters'
import { type Complexity, ComplexityItem } from '@/shared/ui/ComplexityItem'
import { toggleSelectComplexity } from '../../model/questionsFiltersSlice'
import { FilterLayout } from '@/shared/ui/FilterLayout'

const ComplexityFilter = () => {
    const selectComplexity = useAppSelector(selectComplexityRanges)

    const renderItem = (item: Complexity) => <ComplexityItem complexity={item} />

    return (
        <FilterLayout
            title="Сложность вопросов"
            items={COMPLEXITY_RANGES}
            renderItem={renderItem}
            getId={getId}
            selectItemsId={selectComplexity}
            action={toggleSelectComplexity}
        />
    )
}

export default ComplexityFilter
