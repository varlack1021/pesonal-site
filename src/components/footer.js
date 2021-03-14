import '../App.css';
import linkedInPic from '../images/linkedIn.jfif';
import githubPic from '../images/github.jfif';

function Footer() {
	return (
		<footer className="Banner" style={{marginTop: '25px'}}>
			<a href="https://www.linkedin.com/in/pvarlack/">
				<img src={linkedInPic} href="https://www.linkedin.com/in/pvarlack/" 
					 style={{width: '70px', height:'70px', borderRadius:'10px'}}
					  className="Grow"
					  alt="linkedInPic"/>
			</a>
			<a href="https://github.com/varlack1021">	
			<img src={githubPic}
			style={{width:'90px', height: '70px', borderRadius:'10px', paddingLeft: '10px' }}
			className="Grow"
			alt="githubPic"
			/>
			</a>
			<p style={{color: '#f2f2f2', fontFamily:'Muli, Sans-Serif'}}> <br/> &copy; 2021 Pharez J Varlack | Powered by AWS </p>
			
		</footer>
	);
}

export default Footer;