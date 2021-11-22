import { ChangeEvent, FC, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { BsFilter, BsCaretDownFill } from 'react-icons/bs'
import FilterPopup from './FilterPopup'
import useViewport from 'src/hooks/useViewport'
import device from 'src/utils/device'
import styles from 'src/styles/SearchInput.module.css'
import utilsStyle from 'src/styles/utils.module.css'
import useToggle from 'src/hooks/useToggle'
import classNames from 'classnames'

const SearchInput: FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filter, toggleFilter] = useToggle(false)
    const { vw } = useViewport()

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


            <BsFilter className={classNames(styles['filter-icon'], utilsStyle['laptop-and-larger'])} />



            <div className={classNames(styles['search-dropdown'], utilsStyle['tablet-and-smaller'])}>
                <FiSearch className={styles['search-icon']} onClick={toggleFilter} />
                <BsCaretDownFill size={10} onClick={toggleFilter} />
                <FilterPopup active={filter} togglePopup={toggleFilter} />
            </div>

            <FiSearch className={classNames(styles['search-icon'], utilsStyle['laptop-and-larger'])} />


        </div>
    )
}

export default SearchInput