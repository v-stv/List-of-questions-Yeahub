import { combineReducers } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api'
import { questionsFiltersSlice } from '@/features/questionsFilters'

export const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    questionsFilters: questionsFiltersSlice,
})
