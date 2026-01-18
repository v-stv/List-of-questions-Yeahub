import { createSelector } from 'reselect'
import { COMPLEXITY_RANGES } from '../config/constants'
import type { RootState } from '@/app/store/config/types'

const selectQuestionsFilters = (state: RootState) => state.questionsFilters

export const selectComplexityRanges = (state: RootState) => state.questionsFilters.complexityRanges
export const selectRating = (state: RootState) => state.questionsFilters.rate
export const selectLimitSkills = (state: RootState) => state.questionsFilters.limitSkills
export const selectSkill = (state: RootState) => state.questionsFilters.skills
export const selectSpecialization = (state: RootState) => state.questionsFilters.specializations
export const selectPage = (state: RootState) => state.questionsFilters.page
export const selectTitle = (state: RootState) => state.questionsFilters.title
export const selectLimitSpecializations = (state: RootState) =>
    state.questionsFilters.limitSpecializations

export const selectComplexity = createSelector([selectComplexityRanges], (complexityRanges) =>
    complexityRanges.flatMap(
        (rangeId) => COMPLEXITY_RANGES.find((r) => r.id === rangeId)?.values || []
    )
)

export const selectQuestionsParams = createSelector(
    [selectQuestionsFilters, selectComplexity],
    ({ page, title, specializations, skills, rate, keyword: keywords }, complexity) => ({
        page,
        title,
        specializations,
        skills,
        rate,
        complexity,
        keywords,
    })
)
