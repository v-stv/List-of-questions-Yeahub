import styles from './QuestionMetrics.module.css'
import { MetricItem } from '@/shared/ui/MetricItem'

type Props = {
    rate: number
    complexity: number
}

const QuestionMetrics = (props: Props) => {
    const { rate, complexity } = props

    return (
        <div className={styles.wrapper}>
            <MetricItem title={'Рейтинг'} value={rate} />
            <MetricItem title={'Сложность'} value={complexity} />
        </div>
    )
}

export default QuestionMetrics
