import { FC, useState, CSSProperties } from 'react'
import NewsCard from 'src/components/NewsCard'

const Test: FC = () => {

    return (
        <div style={style}>
            <NewsCard
                src='https://tabloidnyata.com/wp-content/uploads/2017/06/mr-robot-season-2-after-show.jpg'
                category='Other'
                title='Mr Robot Season 5 is Out!'
                publisher='Dean'
                date='12/1/21'
                time='9:30'
                to='/'
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