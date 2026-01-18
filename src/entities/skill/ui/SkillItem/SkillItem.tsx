import styles from './SkillItem.module.css'
import type { Skill } from '@/entities/skill'

type Props = {
    skill: Skill
}

const SkillItem = (props: Props) => {
    const {
        skill: { imageSrc, title },
    } = props

    return (
        <>
            <img
                src={imageSrc ? imageSrc : '/src/shared/assets/images/skillAlt.png'}
                alt={''}
                className={styles.image}
            />
            <span className={styles.title}>{title}</span>
        </>
    )
}

export default SkillItem
