import styles from './ComplexityItem.module.css'
import type { Complexity } from '../model/types'

type Props = {
    complexity: Complexity
}

const ComplexityItem = (props: Props) => {
    const { complexity } = props

    return <span className={styles.specialization_title}>{complexity.title}</span>
}

export default ComplexityItem
