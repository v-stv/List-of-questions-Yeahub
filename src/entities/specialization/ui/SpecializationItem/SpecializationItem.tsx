import styles from './SpecializationItem.module.css'
import type { Specialization } from '../../model/types'

type Props = {
    specialization: Specialization
}

const SpecializationItem = (props: Props) => {
    const {
        specialization: { title },
    } = props

    return <span className={styles.title}>{title}</span>
}

export default SpecializationItem
