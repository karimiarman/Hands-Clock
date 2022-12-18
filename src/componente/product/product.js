import './product.css'
import { useEffect, useState } from "react";

function Namber() {
	const [secs, setSec] = useState();
	const [smin, setMin] = useState();
	const [sHou, setHou] = useState()

	useEffect(() => {
		function setTime() {
			const sec = document.querySelector('.sec');
			const min = document.querySelector('.min');
			const hou = document.querySelector('.hou');
			const time = new Date();
			const timeSecn = time.getSeconds() / 60;
			const timeMenit = (timeSecn + time.getMinutes()) / 60;
			const timeHours = (timeMenit + time.getHours()) / 12;
			setSec(sec.style.setProperty('--rotates', timeSecn))
			setMin(min.style.setProperty('--rotates', timeMenit))
			setHou(hou.style.setProperty('--rotates', timeHours))
		}
		setInterval(setTime, 1000)
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