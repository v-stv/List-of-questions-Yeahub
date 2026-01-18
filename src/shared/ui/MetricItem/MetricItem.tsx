import styles from './MetricItem.module.css'

type Props = {
    title: string
    value: number
}

const MetricItem = (props: Props) => {
    const { title, value } = props

    return (
        <div className={styles.wrapper}>
            <p>{title}:</p>
            <span className={styles.value}>{value}</span>
        </div>
    )
}

export default MetricItem
