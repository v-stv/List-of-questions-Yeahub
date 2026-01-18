import type { ChipType } from '../model/types'
import type { ChildrenProp, Position } from '@/shared/model'
import { CustomLink } from '../../CustomLink'

type Props = {
    children: ChildrenProp
    className?: string
    onClick?: () => void
    icon?: ChildrenProp
    position?: Position
    variant?: ChipType
    to?: string
}

const Chip = (props: Props) => {
    const { children, className, onClick, icon, position = 'left', variant = 'button', to } = props

    const content = (
        <>
            {position === 'left' && icon}
            {children}
            {position === 'right' && icon}
        </>
    )

    if (variant === 'link') {
        if (!to) {
            console.error('Chip: prop "to" is required when variant is "link"')
            return null
        }

        return (
            <CustomLink link={to} className={className}>
                {content}
            </CustomLink>
        )
    }

    return (
        <div className={className} onClick={onClick}>
            {content}
        </div>
    )
}

export default Chip
