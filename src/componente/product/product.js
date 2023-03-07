import './product.css'
import { useEffect, useState } from "react";

function Namber() {
	
	useEffect(() => {
		function setTime() {
			const sec = document.querySelector('.sec');
			const min = document.querySelector('.min');
			const hou = document.querySelector('.hou');
			const time = new Date();
			const timeSecn = time.getSeconds() / 60;
			const timeMenit = (timeSecn + time.getMinutes()) / 60;
			const timeHours = (timeMenit + time.getHours()) / 12;
			sec.style.setProperty('--rotates', timeSecn)
			min.style.setProperty('--rotates', timeMenit)
			hou.style.setProperty('--rotates', timeHours)
		}
		setTime()
	}, [])

	return (
		<div>
			<div className='hand nails'></div>
			<div className='hand sec' ></div>
			<div className='hand min' ></div>
			<div className='hand hou' ></div>

		</div>
	)
}
export default Namber
