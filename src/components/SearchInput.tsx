import { ChangeEvent, FC, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsFilter, BsCaretDownFill } from 'react-icons/bs'
import FilterPopup from './FilterPopup'
import useViewport from 'src/hooks/useViewport'
import device from 'src/utils/device'
import styles from 'src/styles/SearchInput.module.css'
import useToggle from 'src/hooks/useToggle'

const SearchInput: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filter, toggleFilter] = useToggle(false)
    const { vw } = useViewport()
    const { isDesktop, isLaptop, isMobile, isTablet } = device(vw)

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value)
    }


    return (
        <div className={styles.container}>

            <input
                className={styles.input}
                onChange={handleSearchChange}
                type="text"
                value={searchTerm}
            />

            {
                (isDesktop || isLaptop) && (
                    <BsFilter className={styles['filter-icon']} />
                )
            }

            {
                isMobile
                    ? (
                        <div className={styles['search-dropdown']}>
                            <FiSearch className={styles['search-icon']} onClick={toggleFilter} />
                            <BsCaretDownFill size={10} />
                            <FilterPopup active={filter} togglePopup={toggleFilter} />
                        </div>
                    )
                    : (
                        <FiSearch className={styles['search-icon']} />
                    )
            }

        </div>
    )
}

export default SearchInput