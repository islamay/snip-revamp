import React from 'react'
import styles from 'src/styles/Brand.module.css'

const Brand = () => {

    return (
        <div translate="no" className={styles['snip-brand']}>
            <h1 className={styles['snip-brand__short-name']}>
                <a href="#">SNIP</a>
            </h1>
            <h5 className={styles['snip-brand__full-name']}>
                <a href="#" tabIndex={-1}>Smakenza News In Pocket</a>
            </h5>
        </div>
    )
}

export default Brand