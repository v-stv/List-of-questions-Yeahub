import { type ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { useDebounce } from './useDebounce'

interface UseDebouncedReduxInputProps {
    reduxValue: string
    setReduxValue: ActionCreatorWithPayload<string>
    delay?: number
}

export const useDebouncedReduxInput = ({
    reduxValue,
    setReduxValue,
    delay = 500,
}: UseDebouncedReduxInputProps) => {
    const [inputValue, setInputValue] = useState(reduxValue)
    const debouncedValue = useDebounce(inputValue, delay)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setReduxValue(debouncedValue))
    }, [dispatch, debouncedValue, setReduxValue])

    useEffect(() => {
        setInputValue(reduxValue || '')
    }, [reduxValue])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    return {
        inputValue,
        handleChange,
    }
}
