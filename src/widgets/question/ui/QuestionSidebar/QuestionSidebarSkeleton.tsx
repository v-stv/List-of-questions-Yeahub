import styles from './QuestionSidebar.module.css'
import skeletonStyles from './QuestionSidebarSkeleton.module.css'
import { Skeleton } from '@/shared/ui/Skeleton'

const QuestionSidebarSkeleton = () => {
    return (
        <div className={styles.sidebar}>
            <section>
                <Skeleton width="80px" height="20px" className={skeletonStyles.mb} />
                <div className={skeletonStyles.metrics}>
                    <Skeleton width="100px" height="33px" borderRadius="8px" />
                    <Skeleton width="120px" height="33px" borderRadius="8px" />
                </div>
            </section>
            <div className={skeletonStyles.filter}>
                <Skeleton width="70px" height="20px" className={skeletonStyles.mb} />
                <div className={skeletonStyles.chips}>
                    <Skeleton width="100px" height="41px" borderRadius="12px" />
                    <Skeleton width="120px" height="41px" borderRadius="12px" />
                    <Skeleton width="90px" height="41px" borderRadius="12px" />
                </div>
            </div>
            <div className={skeletonStyles.filter}>
                <Skeleton width="140px" height="20px" className={skeletonStyles.mb} />
                <div className={skeletonStyles.chips}>
                    <Skeleton width="80px" height="32px" borderRadius="12px" />
                    <Skeleton width="95px" height="32px" borderRadius="12px" />
                    <Skeleton width="110px" height="32px" borderRadius="12px" />
                    <Skeleton width="70px" height="32px" borderRadius="12px" />
                </div>
            </div>
        </div>
    )
}

export default QuestionSidebarSkeleton
