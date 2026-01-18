import { baseApi } from '@/shared/api'
import type { SkillParams, SkillsApiResponse } from '../model/types'
import { ESkillApiUrl } from '../config/urlApi'

export const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchSkills: builder.query<SkillsApiResponse, SkillParams>({
            query: (params) => ({
                url: ESkillApiUrl.ALL_SKILLS,
                params,
            }),
        }),
    }),
})

export const { useFetchSkillsQuery } = skillApi
