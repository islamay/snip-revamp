import { FC, useState, CSSProperties } from 'react'
import YoutubeCard from 'src/components/YoutubeCard'


const Test: FC = () => {

    return (
        <div style={style}>
            <YoutubeCard
                src='https://www.youtube.com/embed/67gYEK4FtzA'
                title='I Live For This S***'
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