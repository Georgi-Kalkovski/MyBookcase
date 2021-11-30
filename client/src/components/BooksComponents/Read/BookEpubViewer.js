import './BookEpubViewer.css';
import { useLocation } from "react-router-dom";

const BookEpubViewer = () => {
    console.log(useLocation());
    const { fileUrl } = useLocation().state;
    console.log(fileUrl);
    return (
        <iframe className='book' src={fileUrl}></iframe>
    );
};

export default BookEpubViewer;