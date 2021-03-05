import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import styles from '../styles/components/ImageBanner.module.css'
export function ImageBanner() {
    return (
        <div className={styles.containerImg}>
            <img className={styles.img} src="images\lol.jpg" alt="League of legends" />
            <div className={styles.container}>
                <button> <FontAwesomeIcon icon="wifi" /> Live</button>
                <br /><br />
                <span>
                    Renegades vs Chiefs - ESL Pro
            </span>
                <br />
                <span>
                    League Season 16 -Playoffs
            </span>
                <div className={styles.divName}>
                    <img src="https://www.zapgrupos.com/grupos/thumb/imgZapGrupos_26031806122933509.jpg" alt="" />
                    <span>League of legends</span>
                    <strong>•</strong>
                    <img className={styles.iconCountry} src="https://img.icons8.com/color/452/usa.png" alt="" />
                    <span className={styles.language}>English</span>
                </div>
                <button className={styles.buttonWatch}>Watch</button>
            </div>
        </div>
    )
}