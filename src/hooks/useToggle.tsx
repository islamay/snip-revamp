import { useState } from 'react'

const useToggle = (initial: boolean): [boolean, () => void] => {
    const [value, setValue] = useState(initial)

    const toggle = () => {
        setValue(!value)
    }

    return [value, toggle]
}

export default useToggle