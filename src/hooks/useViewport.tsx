import { useState, useEffect } from 'react'


const useViewport = () => {
    const [vh, setVh] = useState<number>(0)
    const [vw, setVw] = useState<number>(0)

    useEffect(() => {
        if (window !== undefined) {
            setVh(window.innerHeight)
            setVw(window.innerWidth)
            window.addEventListener('resize', () => {
                setVh(window.innerHeight)
                setVw(window.innerWidth)
            })
        }
    }, [])

    return { vh, vw }
}

export default useViewport

