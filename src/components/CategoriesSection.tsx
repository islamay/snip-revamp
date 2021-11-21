import React from 'react'
import styles from 'src/styles/CategoriesSection.module.css'
import { sidebarLinks } from './Sidebar'

const CategoriesSection = () => {

    return (
        <div className={styles.container}>
            {
                sidebarLinks.map(({ icon, title, to }) => {
                    return (
                        <a href={to}>{icon} {title}</a>
                    )
                })
            }
        </div>
    )
}

export default CategoriesSection