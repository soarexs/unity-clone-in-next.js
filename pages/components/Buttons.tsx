interface ButtonsProps {
    children: string
    background: string
    name: string
}


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
import styles from '../styles/components/Buttons.module.css'

export function Buttons(props: ButtonsProps) {
    function BgChange() {
        if ("var(--blue-dark)") {
            "var(--background)"
        }
    }

    return (
        <div>
            <div className={styles.buttonsMenu}
                style={{ background: props.background }}
                onClick={BgChange}
            >
                <a className={styles.aMenu} href="">
                    <FontAwesomeIcon icon={props.name} />
                    {props.children}</a>
            </div>
        </div>
    )
}