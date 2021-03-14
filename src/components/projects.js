import Container from 'react-bootstrap/Container';
import twentyThreeAndMe from '../images/23andMe.png';
import hearst from '../images/hearst.png';
import omada from '../images/omada.PNG';
import code2040 from '../images/code2040.png';
import tHoward from '../images/tHoward.jfif';

import '../App.css'

function Projects() {
	return (
		<Container className="Container">
			<h2>Projects !</h2>
			<p>Below you will find links to different projects and experiences I have done outside of class</p>
			<div className="Page-Section-Text">
				<h2>23andMe Summer Intern  </h2>
				<a href="https://github.com/varlack1021">	
				<img src={twentyThreeAndMe}
					style={{width:'20%', height: '40%', borderRadius:'40px',}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>Check out some of the things I did while working at my first software engineering position!</p>
			</div>
			<div className="Page-Section-Text" >
				<h2> Hearst Summer Intern</h2>
				<a href="https://github.com/varlack1021">	
				<img src={hearst}
					style={{width:'20%', height: '40%', borderRadius:'40px'}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>Check out some the things I did while working at Hearst as a Data Science Intern!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Omada Health Mentee</h2>
				<a href="https://github.com/varlack1021">	
				<img src={omada}
					style={{width:'35%', height: '60%', borderRadius:'20px', paddingTop: '20px', paddingBottom:'20px'}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>See some of the cool things I built with a senior enginner manager! </p>
			</div>
			<div className="Page-Section-Text">
				<h2>Code 2040 </h2>
				<a href="https://github.com/varlack1021">	
				<img src={code2040}
					style={{width:'35%', height: '50%', paddingTop: '20px', paddingBottom:'20px'}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>A tech community dedicated to activating, connecting, and mobilizing the largest racial equity community in tech. </p>
			</div>
			<div className="Page-Section-Text">
				<h2>T.Howard Foundation </h2>
				<a href="https://github.com/varlack1021">	
				<img src={tHoward}
					style={{width:'25%', height: '40%',}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>An organization that aims to increase diversity and inclusion in the media industry</p>
			</div>

		</Container>
	)
}

export default Projects;