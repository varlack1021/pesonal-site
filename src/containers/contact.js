import Container from 'react-bootstrap/Container';
import email from '../images/email.png';
import EmailForm from '../components/EmailForm';
import '../App.css';

function Contact() {
return (
    <Container>
    <h3>Contact </h3>  
    <EmailForm img={email}/>    
    <p> Use this form to contact me!</p>	
    </Container>
  );
}

export default Contact;