import { useState, useEffect } from 'react';
import '../assets/css/ImagePopup.css'; 
import posterimg from '../assets/img/poster.webp'; 

const ImagePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose}>
          ×
        </button>
        <a href="https://www.portaldisc.com/evento/triumphantdarknessiv" target="_blank" rel="noopener noreferrer">
          <img 
            src={posterimg}
            alt="Popup Apocalyptic"
            className="popup-image"
          />
        </a>
      </div>
    </div>
  );
};

export default ImagePopup;