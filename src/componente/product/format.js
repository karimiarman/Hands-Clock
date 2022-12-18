import './format.css'
import Namber from './product'
function Format() {
	// const sec = useRef()
	// const min = useRef()
	return (

		<div className='clock'>
			<Namber />
			<div className='namber s1'>/</div>
			<div className='namber s2'>/</div>
			<div className='namber s3'>3</div>
			<div className='namber s4'>/</div>
			<div className='namber s5'>/</div>
			<div className='namber s6'>9</div>
			<div className='namber s7'>/</div>
			<div className='namber s8'>/</div>
			<div className='namber s9'>6</div>
			<div className='namber s10'>/</div>
			<div className='namber s11'>/</div>
			<div className='namber s12'>12</div>
		</div>
	)
}
export default Format