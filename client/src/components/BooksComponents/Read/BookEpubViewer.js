import './BookEpubViewer.css';

const BookEpubViewer = ({
    fileUrl
}) => {
    console.log(fileUrl);
    return (
        <iframe class='book' src={fileUrl}></iframe>
    );
};

export default BookEpubViewer;