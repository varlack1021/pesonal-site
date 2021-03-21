import '../App.css';
import Container from 'react-bootstrap/Container'

import hiking from '../images/hiking.jpg';
import leadership from '../images/leadership.jpg';
import workout from '../images/workout.png';
import flying from '../images/flying.jpg';
import cooking from '../images/cooking.jpg'

function Interests() {
	return (
		<Container className='Container'>
			<h2>Interests!</h2>
			<p>Below you will find things I like to do when my code just won't work</p>
			<div className="Page-Section-Text">
			<h2>Hiking</h2>
				<a href="/comingsoon">
					<img src = {hiking} alt="hiking" className="Interest-Image Grow"  />
				</a>
				<p className='Top-Padding-Size'>Checkout out some of my favorite places to hike! </p>
			</div>
			<div className="Page-Section-Text">
				<h2>Student Leadership</h2>
				<a href="/comingsoon">
					<img src = {leadership} alt="leadership" className="Interest-Image Grow" />
				</a>
				<p className='Top-Padding-Size'>See some the clubs and organizations I lead while on campus!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Fitness</h2>
				<a href="/comingsoon">
					<img src = {workout}  alt="workout" className="Interest-Image Grow" style={{width: '40%', }}/>
				</a>
				<p  className='Top-Padding-Size'>Follow the different activities I do to stay in shape and have fun!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Adventures</h2>
				<a href="/comingsoon">
					<img src = {flying} className="Interest-Image Grow" alt="flying"/>
				</a>
				<p className='Top-Padding-Size'>View some of the crazy adeventures I have been on!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Cooking</h2>
				<a href="/comingsoon">
					<img src = {cooking} className="Interest-Image Grow" alt="flying"/>
				</a>
				<p className='Top-Padding-Size'>See how I've been cheffing it up! </p>
				<p style={{fontSize:'15px'}}>(Disclaimer, my skills are nowhere near the above pic) </p>
			</div>
		</Container>
		
		)
}

export default Interests;