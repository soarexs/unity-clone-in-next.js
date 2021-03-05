import styles from '../styles/components/ButtonsFollowing.module.css'

export function ButtonsFollowing() {


    return (
        <div>

            <div className={styles.buttonsMenu}>
                <a className={styles.aMenu} href="">
                    <div className={styles.divButtonA}>
                        <div className={styles.profileFollowing}>
                            <img className={styles.profile} src="https://avatars.githubusercontent.com/u/76456810?s=400&u=a079e6feba3982f8d8a89330e932be274a3d6f50&v=4" alt="Andrey Soares" />

                        </div>
                            Andrey Soares
                    </div>
                </a>
            </div>
        </div>
    )
}