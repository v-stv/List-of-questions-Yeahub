import { Suspense } from 'react'
import { QuestionsPageLazy } from '@/pages/questions'
import { QuestionSpecificPageLazy } from '@/pages/questionSpecific'
import { EAppRoutes } from '@/shared/config'
import { Spinner } from '@/shared/ui/Spinner'
import Main from '@/app/layouts/Main'
import { NotFoundPageLazy } from '@/pages/notFound'

export const routes = [
    {
        element: <Main />,
        children: [
            {
                path: EAppRoutes.MAIN,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <QuestionsPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.SPECIFIC_QUESTION,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <QuestionSpecificPageLazy />
                    </Suspense>
                ),
            },
            {
                path: EAppRoutes.NOT_FOUND,
                element: (
                    <Suspense fallback={<Spinner />}>
                        <NotFoundPageLazy />
                    </Suspense>
                ),
            },
        ],
    },
]
