import React from 'react';
import styles from './Scroll.module.css';
import scrollBg from '../../images/scroll.png';
import cancelIcon from '../../icons/cancel.png';


const Scroll = () => {

	return (
		<div className={styles.scroll__wrap}>
			<div className={styles.scroll__img}>
				<div className={styles.scroll__icon}>
					<img src={cancelIcon} alt="cancel-Icon"/>
				</div>
				<img src={scrollBg} alt="scroll"/>
			</div>
		</div>
	)
}
export default Scroll;