import { useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import loader from '../../../loader.svg';
import './BookPdfViewer.css';

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
                            width="640" height="480" allow="autoplay"
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