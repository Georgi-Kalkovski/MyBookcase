import { useRef } from 'react';
import { useLocation } from "react-router-dom";
import { ReactEpubViewer } from 'react-epub-viewer';

const BookEpubViewer = () => {
  const viewerRef = useRef(null);
  const search = useLocation().search;
  const fileUrl = new URLSearchParams(search).get('fileUrl');

  const sharingLink = 'https://drive.google.com/file/d/1KP6z4OsvkLjkfdsClMgj_iG3E-8ZMNzS/view?usp=sharing';
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <ReactEpubViewer
        url={fileUrl}
        //url={sharingLink}
        ref={viewerRef}
      />
    </div>
  );
};

export default BookEpubViewer;