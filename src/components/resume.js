//import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
import resume from './resume.pdf';
import PDF from 'react-pdf-js';
import '../App.css';
import {Document, Page, pdfjs} from 'react-pdf';
import Container from 'react-bootstrap/Container';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function Resume() {
	return (
		<div style={{backgroundColor: '#E6E6E6'}}>
			<iframe src="./resume.pdf" className='Pdf'></iframe>
		</div>
		)
}

export default Resume;

