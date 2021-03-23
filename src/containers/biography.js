import '../App.css';
import Container from 'react-bootstrap/Container';
import biopic from '../images/HPR-PharazVaralack-831.jpg'
import Image from 'react-bootstrap/Image';

function Biography() {
	return (
		<Container className='Container'> 
			<h1>Biography</h1>
			<Image src= {biopic} style={{float:'left', width:'30%'}} roundedCircle/>
			<div>
			<p> 
				Pharez Varlack is a Software Engineer and graduating senior who will be receiving his his Bachelor of Science in
				Computer Science from the State University of New York (SUNY) at New Paltz. Pharez always had a knack
				for tinkering and creating things. His earliest memory of technology was when he took apart his remote 
				controller helicopter to try and make it fly faster in air. The helicopter definitely did fly faster, until
				it hit a wall...
			</p>
			<p> Throughout the years he played with technology he fell in love with it, and it only made sense to pursue
				this passion as a career. However, he was unsure of what field he wanted to enter. It was not until his senior year
				of high school that he knew he wanted to be a Software Engineer. He took AP Computer Science Principles,
				where he built a game in javscript using a drag and drop code. While the game was awful and the characters were
				stcik figures, Pharez loved every aspect of building it and was hungry to learn more. 
			</p>
				
			<p>				
				When he's not sitting in the front of his computer, you can catch him giving campus tours, helping out residents, 
				hiking, or just enjoying life! Pharez always makes it a point to ensure that he is always having fun with whatever
				he does. Pharez's fundamental belief is that you should always do something you enjoy or are
				passionate about. However, he likes to get out of his comfort zone as he knows this is the best way to learn and grow. 
				Specifically, he continues to
				develop his skills working on a team along with his communications and leadership skills. He welcomes new challenges
				and is not afraid to be uncomfortable.

			</p>
				In his time in undergrad, Pharez actively sought out new opportunities. He would regulary attend Hackathons and conferences,
				in addition to holding multiple leadership positions. He was forunate enough to have became a Resident Assistant, Student Ambassador,
				Orientation Leader, a member of the Resident Hall Student Association (RHSA), and was eventually promoted to the Senior Resident
				Assistant position. By far, his favorite activity was being a member of RHSA. Not only did he regulary meet new people and 
				find new ways to support them, but he also met some of his best friends through it. Specifically, Pharez's position on the
				RHSA board was the National Communications Coordinator (NCC). He was responsible for ensuring meetings ran smoothly and
				bringing order to what would sometimes be a choatic room. He also had to plan, budget, coordinate, interview, select and prepare delegates
				to represent SUNY New Paltz at conferences all over the country. This was by far one Pharez's favorite responsibilites as he sharpened his
				leadership skills and was able to fullfill his passion for travelling. In one year he was able to visit incredible places
				such as Boston, Geneso, Arizona, New Orleans, Baton Rouge and more!
			<br/>
			<br/>
			<p>
				
			</p>
			</div>
		</Container>
	)
}

export default Biography;