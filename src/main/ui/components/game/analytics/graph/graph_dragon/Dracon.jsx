import React, { useEffect, useState } from 'react';
import styles from './Dragon.module.css';
import dragonVD1 from '../../../../../video/dragon-gif.gif';
import dragonFly from '../../../../../audio/dragon-fly.mp3';
import { useDispatch, useSelector } from "react-redux";
import { favoriteDecksActions } from "../../../../../../bll/favoriteDecks/favoriteDecksReducer";


const Dragon = () => {

	const { isSound, bannerForGraph } = useSelector ((state) => state.favoriteDecks);
	const [ fadeIn, setFadeIn ] = useState (false);
	const [ dragonImg, setDragonImg ] = useState ('');
	const dispatch = useDispatch ();

	useEffect (() => {

		const dragonTimerId = setTimeout (() => {
			setDragonImg ('');
			setDragonImg (dragonVD1);
		}, 0)

		const dragonTimerId1 = setTimeout (() => {
			setFadeIn (true);
			dispatch (favoriteDecksActions.setBanner ('totalsBanner'));
		}, 11000);

		return () => {
			clearTimeout(dragonTimerId);
			clearTimeout(dragonTimerId1);
		}
	}, [bannerForGraph]);
	
	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__graph}>
				<div className={styles.dragon__gif}>
					<img src={dragonImg} alt="dragon"/>
					<audio autoPlay={true} muted={!isSound}>
						<source src={dragonFly} type="audio/mpeg"/>
					</audio>
				</div>
				<div className={styles.dragon__cloud}></div>
				<div className={styles.dragon__text}>
					<div className={styles.dragon__discr}>You did not complete the test.</div>
					<div className={styles.dragon__discr}>We are very sorry. </div>
					<div className={styles.dragon__discr}>Your bottom line will be degraded.</div>
				</div>
			</div>
		</div>

	)
}

export default Dragon;