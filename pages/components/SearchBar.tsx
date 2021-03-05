import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { far } from '@fortawesome/free-regular-svg-icons'
library.add(far)
import styles from '../styles/components/SearchBar.module.css'
export function SearchBar() {
    return (
        <header className={styles.container}>
            <div className={styles.divBrowse}>
                <FontAwesomeIcon className={styles.iconCompass} icon="compass" />
                <a href="">Browse
                <FontAwesomeIcon className={styles.iconDown} icon="chevron-down" />
                </a>
            </div>

            <div className={styles.barContainer}>
                <FontAwesomeIcon className={styles.iconSearch} icon="search" />
                <input className={styles.searchBar} type="text" placeholder="Search Everything" />
            </div>

            <div className={styles.iconsDiv}>
                <FontAwesomeIcon className={styles.icons} icon="plus-square" />
                <FontAwesomeIcon className={styles.icons} icon="comment-dots" />
                <FontAwesomeIcon className={styles.icons} icon="bell" />
                <img className={styles.profile} src="https://avatars.githubusercontent.com/u/76456810?s=400&u=a079e6feba3982f8d8a89330e932be274a3d6f50&v=4" alt="Andrey Soares" />
            </div>
        </header>
    )
}