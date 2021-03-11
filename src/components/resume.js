//import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, Annotation, TextSearch, Inject } from '@syncfusion/ej2-react-pdfviewer';
import '../App.css';

function Resume() {
	return (
		<div style={{backgroundColor: '#E6E6E6'}}>
			<iframe src="./resume.pdf" className='Pdf' title="resume"></iframe>
		</div>
		)
}

export default Resume;

