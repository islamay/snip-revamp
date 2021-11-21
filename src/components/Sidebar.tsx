import { FC, useRef } from 'react'
import classNames from 'classnames'
import { AiOutlineClose, AiOutlineInfoCircle, AiFillHome } from 'react-icons/ai'
import { FaSchool, FaStoreAlt } from 'react-icons/fa'
import { MdEmojiEvents } from 'react-icons/md'
import { BsFillCalendarEventFill, BsFillPersonCheckFill } from 'react-icons/bs'
import styles from 'src/styles/Sidebar.module.css'
import PopupOverlay from './PopupOverlay'
import Brand from './Brand'

export interface PopupProps {
    active?: boolean;
    togglePopup: () => void;
}

interface SidebarLink {
    to: string;
    title: string;
    icon: any
}

export const sidebarLinks: SidebarLink[] = [
    {
        to: '/#',
        title: 'Home',
        icon: <AiFillHome />
    },
    {
        to: '/#',
        title: 'My School',
        icon: <FaSchool />
    },
    {
        to: '/#',
        title: 'Event',
        icon: <BsFillCalendarEventFill />
    },
    {
        to: '/#',
        title: 'Achievement',
        icon: <MdEmojiEvents />
    },
    {
        to: '/#',
        title: 'E-Commerce',
        icon: <FaStoreAlt />
    },
    {
        to: '/#',
        title: 'Ppdb',
        icon: <BsFillPersonCheckFill />
    },
    {
        to: '/#',
        title: 'Other',
        icon: <AiOutlineInfoCircle />
    },
]

const Sidebar: FC<PopupProps> = ({
    active = false,
    togglePopup
}) => {

    const sidebarRef = useRef<HTMLDivElement>(null)

    return (
        <>
            <PopupOverlay active={active} togglePopup={togglePopup} />
            <div
                ref={sidebarRef}
                className={classNames(styles.container, active && styles.active)}
            >
                <header className={styles['sidebar-header']}>
                    <Brand />
                    <AiOutlineClose
                        onClick={togglePopup}
                        className={styles['sidebar-close']}
                    />
                </header>

                <ul className={styles['sidebar-list']}>
                    {
                        sidebarLinks.map(({ title, to, icon }) => {
                            return (
                                <li className={styles['sidebar-list-item']}>
                                    {icon}
                                    <a href={to} className={styles['sidebar-link']}>{title}</a>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        </>
    )
}

export default Sidebar