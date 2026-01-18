import { Pagination } from '@/shared/ui/Pagination'
import { useAppSelector } from '@/shared/lib'
import type { QuestionsApiResponse } from '@/entities/question'
import { selectPage } from '../../questionsFilters/model/questionsFiltersSelectors'

type Props = {
    questionsResponse: QuestionsApiResponse
}

const QuestionsPagination = (props: Props) => {
    const {
        questionsResponse: { total, limit },
    } = props

    const page = useAppSelector(selectPage)

    const totalPages = Math.ceil(total / limit)

    return <Pagination totalPages={totalPages} currentPage={page} />
}

export default QuestionsPagination
