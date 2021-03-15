import Container from 'react-bootstrap/Container';
import nphawks from '../images/nphawks.jpeg';
import movie from '../images/movie.png';
import nqueens from '../images/nqueens.png';
import form from '../images/form.png';
import algorithm from '../images/algorithm.png';
import workout from '../images/workout.jpg';
import textmyself from '../images/textmyself.png';
import mystory from '../images/mystory.png';
import goals from '../images/goals.jfif';

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

		</Container>
	)
}

export default Tech;