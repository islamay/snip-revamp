import { FC, useState } from 'react'
import Navbar from 'src/components/Navbar'

const Test: FC = () => {
    const [openFilter, setOpenFilter] = useState(false)

    return (
        <div>
            <Navbar
                onSearchTermChange={() => { }}
            />
        </div>
    )
}

export default Test