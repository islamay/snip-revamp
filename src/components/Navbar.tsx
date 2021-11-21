import { ChangeEvent, FC } from 'react'
import styles from 'src/styles/Navbar.module.css'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { FaRegUserCircle } from 'react-icons/fa'
import classNames from 'classnames'
import SearchInput from './SearchInput'
import Sidebar from './Sidebar'
import useViewport from 'src/hooks/useViewport'
import device from 'src/utils/device'
import useToggle from 'src/hooks/useToggle'
import Brand from './Brand'


interface NavbarProps {
    onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Navbar: FC<NavbarProps> = (props) => {
    const { vw } = useViewport()
    const [sidebar, toggleSidebar] = useToggle(false)
    const { isDesktop, isLaptop, isMobile, isTablet } = device(vw)


    return (
        <nav
            className={classNames(styles.container)}
        >
            {
                (isMobile || isTablet) && (
                    <>
                        <Sidebar active={sidebar} togglePopup={toggleSidebar} />
                        <HiOutlineMenuAlt1
                            onClick={toggleSidebar}
                            className={styles['burger-menu']}
                        />
                    </>

                )
            }
            {
                (!isMobile && !isTablet) && (
                    <Brand />
                )
            }
            <SearchInput />
            <FaRegUserCircle className={styles['burger-menu']} />
        </nav>

    )
}

export default Navbar