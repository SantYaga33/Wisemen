import React from 'react';
import styles from './Navbar.module.css';
import imgLogin from '../../images/login-shadow.png'


const Navbar = () => {

    return (
        <div className={styles.navbar__wrap}>
            <nav className={styles.nav}>
                <input type="checkbox" className={styles.nav__cb} id="menu-cb"/>
                <div className={styles.nav__content}>
                    <ul className={styles.nav__items}>
                        <li className={styles.nav__item}>
                            <span className={styles.nav__item_text}>
                              Home
                            </span>
                        </li>
                        <li className={styles.nav__item}>
                              <span className={styles.nav__item_text}>
                              Works
                            </span>
                        </li>
                        <li className={styles.nav__item}>
                             <span className={styles.nav__item_text}>
                              About
                            </span>
                        </li>
                        <li className={styles.nav__item}>
                              <span className={styles.nav__item_text}>
                              Contact
                            </span>
                        </li>
                    </ul>
                </div>
                <label className={styles.nav__btn} htmlFor="menu-cb">
                    <div className={styles.nav__login} >
                        <img src={imgLogin} alt="login"/>
                    </div>
                </label>
            </nav>
        </div>
    )
}
export default Navbar;