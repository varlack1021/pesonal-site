import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
				<h2>NpAutoScheduler  </h2>
				<a href="http://www.npautoscheduler.com/">	
				<img src={nphawks}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>A website I bulid for the Residence Life Department at New Paltz!</p>
			</div>
			<div className="Page-Section-Text" >
				<h2>Movie Recommendation System</h2>
				<a href="https://github.com/varlack1021/Movie-Recommendation">	
				<img src={movie}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>A naive implementation of a Movie Recommendation System using Machine Learning</p>
			</div>
			<div className="Page-Section-Text">
				<h2>NQueens</h2>
				<a href="https://github.com/varlack1021/NQueens/blob/master/N-Queen_Display.py">	
				<img src={nqueens}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>My solution to the infamous NQueens problem with a back tracking approach. Complete with a visualization! </p>
			</div>
			<div className="Page-Section-Text">
				<h2>WorkFlows</h2>
				<a href="https://github.com/gmcglinn/Projects_CPS485">	
				<img src={form}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>A website to digitize the application/form process at SUNY New Paltz. </p>
			</div>
			<div className="Page-Section-Text">
				<h2>Techy Problems Solutions</h2>
				<a href="https://github.com/varlack1021/Coding-Challenge-Solutions">	
				<img src={algorithm}
					style={{width:'25%', height: '40%', paddingBottom:'10px'}}
					className="Grow"
					alt="githubPic"/>
				</a>
				<p>A repo of problems I have solved using various data structures and algorithms</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Project-M</h2>
				<a href="https://github.com/varlack1021/project-m">	
				<img src={workout}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>A project I worked on with a senior engineer manager!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Text Myself</h2>
				<a href="/comingSoon">	
				<img src={textmyself}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>Unfortunatley windows and Iphones don't talk. But with Twilio now they do!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>Smart Goals</h2>
				<a href="/comingSoon">	
				<img src={goals}
					className="Grow"
					style = {{borderRadius:'5%', paddingBottom:'10px'}}
					alt="githubPic"/>
				</a>
				<p>An application that aims to consolidate different task tracking services into one!</p>
			</div>
			<div className="Page-Section-Text">
				<h2>This website!</h2>
				<a href="/comingSoon">	
				<img src={mystory}
					className="Grow page-image"
					alt="githubPic"/>
				</a>
				<p>A website about me!</p>
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