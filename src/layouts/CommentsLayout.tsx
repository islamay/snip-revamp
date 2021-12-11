import { FC } from 'react'
import styles from 'src/styles/CommentsLayout.module.css'

interface CommentsWrapperProp {
    width: string | number;
}

const CommentsLayout: FC<CommentsWrapperProp> = ({
    width,
    children
}) => {



    return (
        <div style={{ width: width }} className={styles['container']}>
            {children}
        </div>
    )
}

export default CommentsLayout