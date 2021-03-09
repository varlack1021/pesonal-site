import '../App.css';
import linkedInPic from '../images/linkedIn.jfif';
import githubPic from '../images/github.jfif';

function Footer() {
	return (
		<footer className="Banner" style={{marginTop: '25px'}}>
			<a href="https://www.linkedin.com/in/pvarlack/">
				<img src={linkedInPic} href="https://www.linkedin.com/in/pvarlack/" 
					 style={{width: '70px', height:'70px', borderRadius:'10px'}}
					  className="Grow"/>
			</a>
			<a href="https://github.com/varlack1021">	
			<img src={githubPic}
			style={{width:'90px', height: '70px', borderRadius:'10px', paddingLeft: '10px' }}
			className="Grow"
			/>
			</a>

		</footer>
	);
}

export default Footer;