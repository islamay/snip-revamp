import classNames from 'classnames'
import { FC } from 'react'
import styles from 'src/styles/PopupOverlay.module.css'
import { PopupProps } from './Sidebar'


const PopupOverlay: FC<PopupProps> = ({
    active,
    togglePopup,
}) => {


    return (
        <div
            onClick={togglePopup}
            className={classNames(styles.container, active && styles.active)}
        >

        </div>
    )
}

export default PopupOverlay