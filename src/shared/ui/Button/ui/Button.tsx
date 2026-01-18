import type { ChildrenProp, Position } from '@/shared/model'
import type { ButtonType } from '../model/types'

type Props = {
    children: ChildrenProp
    className?: string
    onClick?: () => void
    icon?: ChildrenProp
    position?: Position
    disabled?: boolean
    type: ButtonType
}

const Button = (props: Props) => {
    const {
        children,
        className,
        onClick,
        icon,
        position = 'left',
        disabled = false,
        type = 'button',
    } = props

    return (
        <button type={type} className={className} onClick={onClick} disabled={disabled}>
            {position === 'left' && icon}
            {children}
            {position === 'right' && icon}
        </button>
    )
}

export default Button
