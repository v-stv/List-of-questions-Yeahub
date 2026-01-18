import styles from './Skeleton.module.css'

type Props = {
    width?: string
    height?: string
    borderRadius?: string
    className?: string
}

const Skeleton = (props: Props) => {
    const { width = '100%', height = '20px', borderRadius = '8px', className = '' } = props

    return (
        <div
            className={`${styles.skeleton} ${className}`}
            style={{ width, height, borderRadius }}
        />
    )
}

export default Skeleton
