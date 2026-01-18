import styles from './QuestionSpecificSkeleton.module.css'
import QuestionSidebarSkeleton from '../QuestionSidebar/QuestionSidebarSkeleton'
import { SectionSkeleton } from '@/shared/ui/Section'
import { Skeleton } from '@/shared/ui/Skeleton'

const QuestionSpecificSkeleton = () => {
    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <Skeleton width="80px" height="40px" borderRadius="8px" />
                <div className={styles.content}>
                    <article>
                        <SectionSkeleton type="title" />
                        <SectionSkeleton type="answer" linesCount={3} />
                        <SectionSkeleton type="answer" linesCount={6} />
                    </article>
                    <QuestionSidebarSkeleton />
                </div>
            </div>
        </main>
    )
}

export default QuestionSpecificSkeleton
