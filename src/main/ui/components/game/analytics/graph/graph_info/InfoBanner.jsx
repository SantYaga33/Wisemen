import React, { useEffect, useState } from 'react';
import styles from './InfoBanner.module.css';
import decor from '../../../../../images/decor-gold.png';


const InfoBanner = () => {

	const [ fadeIn, setFadeIn ] = useState (false);

	// useEffect (() => {
	//
	// 	setTimeout (() => {
	// 		setFadeIn (true);
	// 	}, 6500);
	//
	// }, [ fadeIn]);


	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.info__text}>
				<div className={styles.info__discr}>You did not complete the test.</div>
				<div className={styles.info__discr}>We are very sorry. </div>
				<div className={styles.info__discr}>Your bottom line will be degraded.</div>
			</div>
			<div className={styles.info__img}>
				<img src={decor} alt="decor"/>
			</div>
		</div>
	)
}

export default InfoBanner;