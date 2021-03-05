import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import { Buttons } from "../components/Buttons";
import styles from '../styles/components/LateralMenu.module.css'
import { ButtonsFollowing } from './ButtonsFollowing';
export function LateralMenu() {
    return (
        <div className={styles.menuContainer}>
            <div>
                <FontAwesomeIcon className={styles.icons} icon="gamepad" />


                <span>Unity.</span>
                <FontAwesomeIcon className={styles.gripLines} icon="grip-lines" />

            </div>

            <div className={styles.divFeeds}>
                <div>
                    <span>New Feeds</span>
                    <br />
                    <br />
                    <Buttons name="gamepad" background="var(--blue-dark)"> &nbsp;&nbsp;&nbsp; New Feed</Buttons>
                    <Buttons name="chart-line" background=""> &nbsp;&nbsp;&nbsp;Trending</Buttons>
                    <Buttons name="user" background=""> &nbsp;&nbsp;&nbsp;Following</Buttons>
                    <Buttons name="video" background=""> &nbsp;&nbsp;&nbsp;Your Videos</Buttons>
                    <Buttons name="align-left" background=""> &nbsp;&nbsp;&nbsp;Playlist</Buttons>
                </div>
            </div>

            <div className={styles.lineBottom}></div>

            <div className={styles.divFollowings}>
                <div>
                    <span>Followings</span>
                    <br />
                    <br />
                    <ButtonsFollowing />
                    <ButtonsFollowing />
                    <ButtonsFollowing />
                    <ButtonsFollowing />
                    <ButtonsFollowing />
                    <ButtonsFollowing />
                    <ButtonsFollowing />

                </div>
            </div>

        </div>
    )
}