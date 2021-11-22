import { title } from 'process'
import { FC, ReactNode } from 'react'
import styles from 'src/styles/TextIcon.module.css'

interface TextIconProps {
    title: string,
    startIcon?: ReactNode
    endIcon?: FC,
    color?: string
}

const TextIcon: FC<TextIconProps> = ({
    title,
    startIcon,
    endIcon,
    color
}) => {

    return (
        <div className={styles.container} style={{ color: color }}>
            {startIcon}
            <h3 className={styles.title}>{title}</h3>
            {endIcon}
        </div>
    )

}

interface TypographyProps {
    type: string,
    title: string
}

export default TextIcon