import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import './BookPdfViewer.css';
import loader from '../../../loader.svg';

const BookPdfViewer = () => {
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    const { fileUrl } = useLocation().state;
    console.log(fileUrl);
    return (
        <div onClick={() => navigate(-1)}>
            {
                <>
                    {
                        loaded ? null : (<img className="pdfLoader" src={loader} />)
                    }
                    <div className="goBackBox"
                        style={loaded ? {} : { display: 'none' }}>
                        <iframe
                            className='bookIframe'
                            src={fileUrl}
                            onLoad={() => setLoaded(true)}
                        >
                        </iframe>
                    </div>
                </>
            }
        </div>
    );
};

export default BookPdfViewer;