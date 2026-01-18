import type { ChangeEvent } from 'react'

type Props = {
    className: string
    value: string
    type: string
    placeholder: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Input = (props: Props) => {
    const { className, value, type, placeholder, onChange } = props

    return (
        <input
            value={value}
            className={className}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

export default Input
