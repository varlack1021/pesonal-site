import '../App.css';
import Container from 'react-bootstrap/Container';

function NavBar() {
	return (
		<Container className="Banner Sticky">
			<a className="Nav Grow" href="/"> Home </a>
			<a className="Nav Grow" href = "biography"> Biography</a>
			<a className="Nav Grow" href="/resume"> Resume </a>
			<a className="Nav Grow" href = "/projects"> Projects </a>
			<a className="Nav Grow" href = "/tech"> Tech </a>
			<a className="Nav Grow" href = "/interests"> Interests </a>
			<a className="Nav Grow" href = "/contact"> Contact </a>
		</Container>
		);
}

export default NavBar;