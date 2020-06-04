import React from 'react';
import styles from './Header.module.css'
import imgLogin from '../../images/login-shadow.png'
import imgLogo from '../../images/Wisemen-shadow2.png'
import Navbar from "../navbar/Navbar";

const Header = ({ setModal }) => {

	const activationModal = () => {
		setModal (true);
	};

	return (
		<div className={styles.header}>
			<div className={styles.header__wrap}>
				<div className={styles.header__logo}>
					<img src={imgLogo} alt="logo"/>
				</div>
				<Navbar/>
				<div className={styles.header__login} id='login' onClick={activationModal}>
					<img src={imgLogin} alt="login"/>
				</div>
			</div>
		</div>
	)
}
export default Header