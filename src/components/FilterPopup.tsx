import { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'
import styles from 'src/styles/FilterPopup.module.css'
import { PopupProps } from './Sidebar'
import PopupOverlay from './PopupOverlay'


const FilterPopup: FC<PopupProps> = ({
    active = false,
    togglePopup
}) => {
    const filterPopupRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <PopupOverlay togglePopup={togglePopup} active={active} />
            <div
                ref={filterPopupRef}
                className={classNames(styles.container, active && styles.active)}
            >

            </div></>
    )
}

export default FilterPopup