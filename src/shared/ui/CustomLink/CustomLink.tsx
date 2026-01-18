import { Link } from 'react-router-dom'
import type { ChildrenProp, Position } from '@/shared/model'

type Props = {
    link: string
    children: ChildrenProp
    icon?: ChildrenProp
    position?: Position
    className?: string
    onClick?: () => void
}

const CustomLink = (props: Props) => {
    const { link, children, icon, position = 'left', className, onClick } = props

    return (
        <Link to={link} className={className} onClick={onClick}>
            {position === 'left' && icon}
            {children}
            {position === 'right' && icon}
        </Link>
    )
}

export default CustomLink
