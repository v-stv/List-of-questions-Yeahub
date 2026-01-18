import { useDispatch } from 'react-redux'
import { useAppSelector, useUrlSync } from '@/shared/lib'
import {
    selectQuestionsParams,
    setKeywords,
    setPage,
    setRate,
    setSkills,
    setSpecializations,
    setTitle,
} from '@/features/questionsFilters'

export const useQuestionsUrlSync = () => {
    const dispatch = useDispatch()
    const questionsParams = useAppSelector(selectQuestionsParams)

    useUrlSync({
        urlToState: (searchParams) => {
            const pageFromUrl = searchParams.get('page')
            const titleFromUrl = searchParams.get('title')
            const specializationFromUrl = searchParams.get('specialization')
            const skillFromUrl = searchParams.get('skills')
            const rateFromUrl = searchParams.get('rate')
            const keywordFromUrl = searchParams.get('keywords')

            if (pageFromUrl) dispatch(setPage(pageFromUrl))
            if (titleFromUrl) dispatch(setTitle(titleFromUrl))
            if (keywordFromUrl) dispatch(setKeywords(keywordFromUrl))

            if (specializationFromUrl) {
                const specializationsArray = specializationFromUrl
                    .split(',')
                    .map(Number)
                    .filter(Boolean)
                dispatch(setSpecializations(specializationsArray))
            }

            if (skillFromUrl) {
                const skillsArray = skillFromUrl.split(',').map(Number).filter(Boolean)
                dispatch(setSkills(skillsArray))
            }

            if (rateFromUrl) {
                const rateArray = rateFromUrl.split(',').map(Number).filter(Boolean)
                dispatch(setRate(rateArray))
            }
        },
        stateToUrl: (params) => ({
            page: String(params.page),
            title: params.title,
            keywords: params.keywords,
            specialization: params.specializations.map(String),
            skills: params.skills.map(String),
            rate: params.rate.map(String),
        }),
        dependencies: questionsParams,
    })
}
