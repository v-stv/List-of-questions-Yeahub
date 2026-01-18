import type { Skill } from '@/entities/skill'
import type { Specialization } from '@/entities/specialization'

export type QuestionByIdParams = string | undefined
export type BuildParams = (params: QuestionParams) => QueryParams

export interface Question {
    id: number
    title: string
    description: string
    code: string
    imageSrc: string
    keywords: string[]
    longAnswer: string
    shortAnswer: string
    complexity: number
    rate: number
    questionSkills: Skill[]
    questionSpecializations: Specialization[]
}

export interface QuestionsApiResponse {
    data: Question[]
    limit: number
    page: number
    total: number
}

export interface QuestionParams {
    skills?: number[]
    specializations?: number[]
    rate?: number[]
    complexity?: number[]
    keywords?: string
    page?: number
    limit?: number
    title?: string
}

export interface QueryParams {
    specialization?: string
    skills?: string
    rate?: string
    complexity?: string
    keywords?: string
    title?: string
    page?: number
    limit?: number
}
