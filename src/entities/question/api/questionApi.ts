import type {
    Question,
    QuestionByIdParams,
    QuestionParams,
    QuestionsApiResponse,
} from '../model/types'
import { QuestionApiUrl } from '../config/urlApi'
import { buildQueryParams } from '../lib/buildQueryParams'
import { baseApi } from '@/shared/api'

export const questionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        fetchQuestions: builder.query<QuestionsApiResponse, QuestionParams>({
            query: (params) => ({
                url: QuestionApiUrl.ALL_QUESTIONS,
                params: buildQueryParams(params),
            }),
        }),
        fetchQuestionById: builder.query<Question, QuestionByIdParams>({
            query: (id) => ({
                url: `${QuestionApiUrl.ALL_QUESTIONS}/${id}`,
            }),
        }),
    }),
})

export const { useFetchQuestionsQuery, useFetchQuestionByIdQuery } = questionApi
