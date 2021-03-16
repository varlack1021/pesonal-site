import '../App.css';
import profilePic from '../images/HPR-PharazVaralack-793.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
	return (
		<Container className="Container">
		<h4 style={{paddingTop: '15px'}}> Welcome to PharezVarlack.com!</h4>
			<Row>
				<Col>
					<img src={profilePic} alt ="HTML5 Icon" className="Profile-Pic Round"/>
					<h4 className="Quote"> "Who you are is defined by what you’re willing to struggle for"</h4>
					<a href="https://www.goodreads.com/work/quotes/48297245-the-subtle-art-of-not-giving-a-f-ck-a-counterintuitive-approach-to-livi" 
					   className="Quote" 
					   style={{textDecoration:'underline'}}>-Mark Manson : The Subtle Art of Not Giving a ...</a>
					   <p>&nbsp; </p>
				</Col>
				<Col style={{paddingTop:'50px'}}>
					<h4> Fun Facts: </h4>
					<ul> 
						<li className="Fun-Fact">I never pet a dog until my first summer of college. </li>
						<li className="Fun-Fact"> I am Caribbean and Panamanian </li>
						<li className="Fun-Fact"> I have an obsession of learning new technologes and building projects with them. </li>
						<li className="Fun-Fact"> I love to travel. I've been to Panama and a tiny island called Anegada </li>
						<li className="Fun-Fact"> I put cheese on Pancakes</li>
						<li className="Fun-Fact"> Favorite Command: conda activate autobots</li>
					</ul>
				</Col>
			</Row>

		</Container>
	)
}

export default Home;