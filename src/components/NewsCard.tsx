import { FC, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import styles from 'src/styles/NewsCard.module.css'

interface props {
    src: string,
    category: String,
    title: string,
    publisher: string,
    date: string,
    time: string,
    to: string
}

const NewsCard: FC<props> = ({
    src,
    category,
    title,
    publisher,
    date,
    time,
    to
}) => {
    const router = useRouter()

    useEffect(() => {
        router.prefetch(to)
        router.prefetch(`/category=${category}`)
    }, [])

    const handleCategoryClick = () => {
        router.push(`/?category=${category}`)
    }

    const handleTitleClick = () => {
        router.push(to)
    }


    return (
        <div className={styles.container}>
            <img
                className={styles.image}
                src={src}
            />
            <div className={styles['card-body']}>
                <h4 onClick={handleCategoryClick} className={styles.category}>{category}</h4>
                <h3 onClick={handleTitleClick} className={styles.title}>{title}</h3>
                <h5 className={styles.publisher}>Oleh {publisher}&ensp;&ensp;{date}&ensp;&ensp;{time}</h5>
            </div>
        </div>
    )
}

export default NewsCard