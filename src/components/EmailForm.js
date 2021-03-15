import React, { useState, setState} from "react";
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Row';
import '../App.css';

function EmailForm(img) {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

let [formData, setFormData] = useState({
	email: "",
    name: "",
    subject: "",
    message: "",
    myemail: "pjvarlack@gmail.com"
 });

const sendEmail = async (formEvent) => {
	let string = "mailto:" + formData.myemail + "?subject=" + formData.subject + "&body=" + formData.message; 
	window.open(string);
	handleClose();

}

return (
	<div>
	<Button style={{background:"none", border:"none"}}> 
		<img src={img.img} onClick={handleShow} className="Grow" style={{width:"40%"}}/></Button>
		<Modal show={show} onHide={handleClose} size="lg">
    	<Modal.Header closeButton>
     	<Modal.Title style={{marginLeft:'auto'}}>Send me an email !</Modal.Title>
    	</Modal.Header>
   		<Modal.Body>
   			<Form>
				<Form.Row>

					<Form.Group style={{width: "50%"}}>
					  <Form.Control type="text" placeholder="Name*" 
					  				className="Modal-input-box" required="True"
					  				onChange={(inputEvent) => setFormData({ ...formData, name: inputEvent.target.value })}
					  				value={formData.name}			
					  				/>
					</Form.Group>
					<Form.Group style={{paddingLeft: "30px", width:"50%"}}>
						<Form.Control type="email" placeholder="Email*" 
					  				className="Modal-input-box"
					  				onChange={(inputEvent) => setFormData({ ...formData, email: inputEvent.target.value })}
					  				value={formData.email}			
					  				/>
					</Form.Group>

					<Form.Group style={{width:"100%"}}>
						<Form.Control type="text" placeholder="Subject" 
									className="Modal-input-box"
									onChange={(inputEvent) => setFormData({ ...formData, subject: inputEvent.target.value })}
					  				value={formData.subject}			
					  				/>
					</Form.Group>

					<Form.Group className="Modal-input-box" style={{width:"100%"}}>
						<Form.Control as="textarea" rows={12} 
										placeholder="Message" className="Modal-input-box"
										onChange={(inputEvent) => setFormData({ ...formData, message: inputEvent.target.value })}
					  					value={formData.message	}
					  				/>
					</Form.Group>

				</Form.Row>
   			</Form>
    	</Modal.Body>
    	<Modal.Footer>
    	<div style={{margin:'auto', padding:'10px'}}>
      		<Button variant="primary" onClick={sendEmail}>
    			Send
      		</Button>
    		<Button style={{marginLeft:'10px'}} variant="secondary" onClick={handleClose}>
        		Cancel
        	</Button>

      	</div>
    	</Modal.Footer>
  </Modal>
  </div>
  )
}

export default EmailForm;