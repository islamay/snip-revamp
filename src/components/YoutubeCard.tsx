import type { FC } from 'react'
import styles from 'src/styles/YoutubeCard.module.css'

interface YoutubeCardProps {
    src: string,
    title: string
}

const YoutubeCard: FC<YoutubeCardProps> = ({
    src,
    title
}) => {

    return (
        <div className={styles.container}>
            <iframe
                className={styles.video}
                src={src}
                frameBorder={0}
            >
                Browser Not Supported
            </iframe>
            <h3 className={styles.title}>{title}</h3>
        </div>
    )
}

export default YoutubeCard