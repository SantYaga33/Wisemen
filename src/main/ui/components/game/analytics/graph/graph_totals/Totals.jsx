import React, { useEffect } from 'react';
import styles from './Totals.module.css';
import FluidMeter from "../../../../../../helpers/fluid_meter/js-fluid-meter";


const Totals = () => {
	useEffect (() => {
		let fm = new FluidMeter ();
		fm.init ({
			targetContainer: document.getElementById ("fluid-meter"),
			fillPercentage: 15,
			options: {
				fontSize: "30px",
				fontFamily: "sans-serif",
				fontFillStyle: "orange",
				drawShadow: true,
				drawText: true,
				drawPercentageSign: true,
				drawBubbles: true,
				size: 200,
				borderWidth: 10,
				backgroundColor: "#088dcd",
				foregroundColor: '#0b3b63',
				foregroundFluidLayer: {
					fillStyle: "#0b3b63",
					angularSpeed: 100,
					maxAmplitude: 12,
					frequency: 30,
					horizontalSpeed: -150
				},
				backgroundFluidLayer: {
					fillStyle: "#0f538a",
					angularSpeed: 100,
					maxAmplitude: 9,
					frequency: 30,
					horizontalSpeed: 150
				}
			}
		});

		fm.setPercentage (65);
	}, [])

	return (
		<div className={styles.totals__wrap}>
			<div className={styles.totals__canvas} id="fluid-meter"></div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__title}>correct answers:</div>
				 <span className={styles.totals__number}>36</span>
			</div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__title}>wrong answers:</div>
				<span className={styles.totals__number}>16</span>
			</div>
			<div className={styles.totals__discr}>
				<div className={styles.totals__title}>missed answers:</div>
				<span className={styles.totals__number}>7</span>
			</div>

		</div>

	)
}

export default Totals;