import { toggleSelectRating } from '../../model/questionsFiltersSlice'
import { RATINGS } from '../../config/constants'
import { selectRating } from '../../model/questionsFiltersSelectors'
import { getId, useAppSelector } from '@/shared/lib'
import { FilterLayout } from '@/shared/ui/FilterLayout'
import { RatingItem } from '@/shared/ui/RatingItem'
import type { Rating } from '@/shared/ui/RatingItem/model/types'

const RatingsFilter = () => {
    const selectRatings = useAppSelector(selectRating)

    const renderItem = (item: Rating) => <RatingItem rating={item} />

    return (
        <FilterLayout
            title="Рейтинг"
            items={RATINGS}
            renderItem={renderItem}
            getId={getId}
            selectItemsId={selectRatings}
            action={toggleSelectRating}
        />
    )
}

export default RatingsFilter
