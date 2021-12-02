import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './BookPdfViewer.css';
import loader from '../../../loader.svg';

const BookPdfViewer = () => {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    
    const { fileUrl } = useLocation().state;

    return (
        <div class="goBackBox" onClick={() => navigate(-1)}>
            {
                <>
                    {
                        loaded ? null : (<img class="pdfLoader" src={loader} />)
                    }
                    <iframe
                        className='bookIframe'
                        src={fileUrl}
                        style={loaded ? {} : { display: 'none' }}
                        onLoad={() => setLoaded(true)}
                    >
                    </iframe>
                </>
            }
        </div>
    );
};

export default BookPdfViewer;