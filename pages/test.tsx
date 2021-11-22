import { FC, useState, CSSProperties } from 'react'
import { AiFillYoutube } from 'react-icons/ai'
import TextIcon from 'src/components/TextIcon'


const Test: FC = () => {

    return (
        <div style={style}>
            <TextIcon
                startIcon={<AiFillYoutube size={40} />}
                title='Video Kami'
            />
        </div>
    )
}

const style: CSSProperties = {
    padding: 20,
    backgroundColor: 'var(--dark)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default Test