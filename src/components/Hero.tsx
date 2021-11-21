import { FC } from 'react'
import { AiFillFire } from 'react-icons/ai'
import styles from 'src/styles/Hero.module.css'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface trendingNew {
    title: string;
    imageLink: string;
}

interface HeroProps {
    trendingNews: trendingNew[]
}

const Hero: FC<HeroProps> = (props) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <p><AiFillFire /> Trending News</p>
            </header>

            <main>
                <Carousel>
                    {
                        props.trendingNews.map(({ imageLink, title }) => {
                            return (
                                <div className={styles['carousel-item']} style={{ backgroundImage: `url(${imageLink})` }}>
                                    <h1 className={styles['carousel-item-title']}>{title}</h1>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </main>
        </div>
    )
}

export default Hero
