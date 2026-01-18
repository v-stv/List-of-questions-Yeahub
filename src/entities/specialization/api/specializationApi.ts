import type { SpecializationApiResponse, SpecializationParams } from '../model/types'
import { baseApi } from '@/shared/api'
import { ESpecializationApiUrl } from '../config/urlApi'

export const specializationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchSpecializations: builder.query<SpecializationApiResponse, SpecializationParams>({
            query: (params) => ({
                url: ESpecializationApiUrl.ALL_SPECIALIZATIONS,
                params,
            }),
        }),
    }),
})

export const { useFetchSpecializationsQuery } = specializationApi
