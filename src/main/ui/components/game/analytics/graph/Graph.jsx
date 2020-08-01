import React, { useEffect, useState } from 'react';
import styles  from './Graph.module.css';
import graphImg  from '../../../../images/graph.png';
import Settings from "../settings/Settings";
import dragon from '../../../../video/dragon.mp4'


const Graph = ({setCardFace}) => {

	const [ fadeIn, setFadeIn] = useState (false);

	useEffect (() => {
		setTimeout (() => {
			setFadeIn (true);
		}, 6500);

	}, [fadeIn]);


	const classForGraph = fadeIn ? `${styles.graph__wrap_active}` : `${styles.graph__wrap}`;

	return (
		<div className={classForGraph}>
			<div className={styles.graph__title}>Graph</div>
			<div className={styles.graph__graph}>

			<video className={styles.graph__video} id='dragon' controls autoPlay muted={true}>
				<source src={dragon} type="video/mp4"/>
			</video>


				{/*<img src={graphImg} alt="graph"/>*/}
			</div>
			<div className={styles.graph__nav}>
				<Settings setCardFace={setCardFace}/>
			</div>
		</div>

	)
}

export default Graph;