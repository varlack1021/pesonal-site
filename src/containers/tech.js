import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

import nphawks from '../images/nphawks.jpeg';
import movie from '../images/movie.png';
import nqueens from '../images/nqueens.png';
import form from '../images/form.png';
import algorithm from '../images/algorithm.png';
import workout from '../images/workout.jpg';
import textmyself from '../images/textmyself.png';
import mystory from '../images/mystory.png';
import goals from '../images/goals.jfif';
import react from '../images/react.png';
import javascript from '../images/javascript.png';
import cicd from '../images/ci-cd.png';
import python from '../images/python.jpg';
import docker from '../images/docker.png';
import aws from  '../images/aws.jpg';
import rest from '../images/rest.jfif';
import git from '../images/git.png';
import agile from '../images/agile.png';
import flask from '../images/flask.png';
import django from '../images/django.png';
import postgress from  '../images/postgress.png';


import '../App.css'

function Tech() {
	return (
		<Container className="Container">
			<h2>Tech !</h2>
			<p>I am relatively new to developing and depoying projects - this website being one of them. However, I am quick to learn
				new things (this site is being built in less than two weeks) and apply what I have learned to the next project. 
				Below are some of my creations.
			</p>

			<div className="Page-Section-Text">
				<h2>NpAutoScheduler</h2>
				<div className="Flex">
					<a href="http://www.npautoscheduler.com/" style={{height:'250px'}}>	
					<Image src={nphawks}
						className="Grow page-image"
						fluid
						/>
					</a>
					<div>
						<ul><h5>Description</h5></ul>
						<ul >A website I built for the Residence Life Department at New Paltz!</ul>
						<ul><h5>Tech</h5></ul>
						<ul>React, React-Bootstrap, Python<br/>Flask, Heroku, Twilio API, CI/CD, Git</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href = "http://www.npautoscheduler.com/"> http://www.npautoscheduler.com/</a>
						</ul>
						<ul>
							<a href = "https://github.com/varlack1021/duty-scheduler"> https://github.com/varlack1021/duty-scheduler</a>
						</ul>
					</div>
				</div>
			</div>
			<div className="Page-Section-Text Clear" >
				<h2>Movie Recommendation System</h2>
					<div className="Flex"  style={{paddingTop:'15px'}}>
					<a href="https://github.com/varlack1021/Movie-Recommendation" style={{width:'250px'}}>	
					<img src={movie}
						className="Grow page-image"
						alt="githubPic"
						
						/>
					</a>
					<div>
						<ul><h5>Description</h5></ul>
						<ul >A Novel Movie Recommendation System powered by Machine Learning</ul>
						<ul ><h5>Tech</h5></ul>
						<ul>Python, Pandas, Numpy, Seaborn, Sklearn, Scipy</ul>
						<ul ><h5>Links</h5></ul>
						<ul>
							<a href="https://github.com/varlack1021/Movie-Recommendation">https://github.com/varlack1021/Movie-Recommendation</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>NQueens </h2>
					<div className="Flex">
					<a href="https://github.com/varlack1021/NQueens" style={{paddingRight:'80px'}}>	
					<img src={nqueens}
						className="Grow page-image"
						alt="githubPic"
						/>
					</a>
					<div style={{paddingRight:'80px'}}>
						<ul><h5>Description</h5></ul>
						<ul>A solution and visualition of the Nqueens problem</ul>
						<ul><h5>Tech</h5></ul>
						<ul>Python, Pygame, Back-Tracking Algorithm</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href="https://github.com/varlack1021/NQueens">
								https://github.com/varlack1021/NQueens
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>Personal Website</h2>
					<div className="Flex">
					<a href="http://www.pharezvarlack.com" style={{paddingTop:'25px', paddingRight:'60px'}}>	
					<img src={mystory}
						className="Grow page-image"
						alt="githubPic"
						/>
					</a>
					<div style={{paddingRight:'60px'}}>
						<ul><h5>Description</h5></ul>
						<ul>A website about me and my experiences!</ul>
						<ul><h5>Tech</h5></ul>
						<ul>Docker, React, React-bootstrap, CI/CD, AWS, Git, Linux</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href="http://www.pharezvarlack.com">
								http://www.pharezvarlack.com
							</a>
						</ul>
						<ul>
							<a href="https://github.com/varlack1021/pesonal-site">
								https://github.com/varlack1021/pesonal-site
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>Project-M</h2>
					<div className="Flex">
					<a href="https://github.com/varlack1021/project-m" style={{height:'250px'}}>	
					<img src={workout}
						className="Grow page-image"
						alt="githubPic"
						/>
					</a>
					<div>
						<ul><h5>Description</h5></ul>
						<ul>A project I worked on with a senior egineer that organizes saved workout vidoes</ul>
						<ul><h5>Tech</h5></ul>
						<ul>Python, Django, React <br/>Heroku, Sendgrid, Docker, Sqlite, Postgress</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href	= "https://github.com/varlack1021/project-m"> 
								https://github.com/varlack1021/project-m
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>SMART Goals</h2>
					<div className="Flex">
					<a href="/comingsoon" style={{paddingTop:'45px',}}>	
					<img src={goals}
						className="Grow page-image"
						alt="githubPic"
						/>
					</a>
					<div style={{paddingRight:'75px',}}>
						<ul><h5>Description</h5></ul>
						<ul>An application to consolidate differet services used to plan your life</ul>
						<ul><h5>Tech</h5></ul>
						<ul>Python, Flask, Git, Docker, SQLAlchemy <br/>Postgress, Heroku, Todoist API, Google Calendar API</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href="comingsoon">
								Coming Soon!
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>Workflows</h2>
					<div className="Flex">
					<a href="https://github.com/gmcglinn/Projects_CPS485" style={{width:'240px', paddingRight: '30px'}}>
					<img src={form}
						className="Grow page-image"
						alt="githubPic"
						/>
					</a>
					<div>
						<ul><h5>Description</h5></ul>
						<ul>A website that digitizes forms and how they are completed</ul>
						<ul><h5>Tech</h5></ul>
						<ul>PHP, Linux, HTML, CSS, MySQL, Git</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href="/comingsoon">
								https://github.com/gmcglinn/Projects_CPS485							
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text Clear">
				<h2>TextMyself</h2>
					<div className="Flex">
					<a href="/comingsoon" style={{paddingTop:'15px',}}>	
					<Image src={textmyself}
						className="Grow page-image"
						alt="githubPic"
						fluid	
						/>
					</a>
					<div style={{paddingRight:'65px'}}>
						<ul><h5>Description</h5></ul>
						<ul>A tool I built to text my laptop from my iphone and vice versa</ul>
						<ul><h5>Tech</h5></ul>
						<ul>Python, Twilio API, Bash Scripts, Flask</ul>
						<ul><h5>Links</h5></ul>
						<ul>
							<a href="/comingsoon">
								Coming Soon
							</a>
						</ul>
					</div>
				</div>			
			</div>
			<div className="Page-Section-Text">
				<br/>
				<h1>My Tech Stack! </h1>
				<Row>
					<Col md={3} className="Center Border">
						<img src = {react}/>
					</Col>
					<Col md={4} className="Center Border">
						<img src = {javascript} />
					</Col>
					<Col md={3} className= "Center Border" >
						<img src = {cicd} />
					</Col>
				</Row>
				<Row>
					<Col md={3} className= "Center Border">
						<img src = {python} className="Center"/>
					</Col>
					<Col md={4} className= "Center Border">
						<img src = {docker} className="Center" />
					</Col>
					<Col md={3} className= "Center Border" >
						<img src = {aws} style={{marginRight:'55px'}}/>
					</Col>
				</Row>
				<Row>
					<Col md={3} className= "Center Border">
						<img src = {flask} style={{width:'100%'}}/>
					</Col>
					<Col md={4} className= "Center Border">
						<img src = {git} className="Center" style={{width:'75%'}}/>
					</Col>
					<Col md={3} className= "Center Border" >
						<img src = {django} style={{width:'100%'}}/>
					</Col>
				</Row>
				<Row>
					<Col md={3} className= "Center Border">
						<img src = {postgress}  className="Center" style={{width:'70%'}}/>
					</Col>
					<Col md={4} className= "Center Border">
						<img src = {agile} className="Center" />
					</Col>
					<Col md={3} className= "Center Border" >
						<img src = {rest} style={{width:'70%'}}/>
					</Col>
				</Row>
				<br/>
				<br/>
			</div>

		</Container>
	)
}

export default Tech;