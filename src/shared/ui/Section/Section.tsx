import styles from './Section.module.css'
import type { ChildrenProp, SectionType } from '@/shared/model'

type Props = {
    children: ChildrenProp
    type?: SectionType
}

const Section = (props: Props) => {
    const { children, type = 'title' } = props

    return (
        <section className={`${styles.section} ${type === 'answer' ? styles.answer : ''}`}>
            {children}
        </section>
    )
}

export default Section
