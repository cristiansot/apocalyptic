import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import youtube from '../assets/img/youtube.svg';
import bandcamp from '../assets/img/bandcamp.svg';

function Footer() {
  return (
    <div className="text-center mt-5 contact">
      <p>+569 6238 6663</p>
      <p>info@apocalypticprods.com</p>

      <div className="d-flex justify-content-center align-items-center gap-4 mt-4">

      <a 
        href="https://apocalypticprods.bandcamp.com/track/ejecutor-m-dium-la-daga-de-la-iniciaci-n"
        target="_blank" 
        className="d-flex align-items-center justify-content-center"
        style={{ width: '70px', height: '65px' }}
      >
        <img src={bandcamp} width="70" />
      </a>

      <a 
        href="https://www.facebook.com/ApocalypticProductions/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center"
        style={{ width: '18px', height: '30px' }}
      >
        <img src={facebook} width="18" />
      </a>
        
      <a 
        href="https://www.instagram.com/apocalypticprods/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center"
        style={{ width: '45px', height: '45px' }}

      >
        <img src={instagram} width="30" />
      </a>
        
      <a 
        href="https://www.youtube.com/channel/UChRksTjZWlG3vCWmo5Ij6_w" 
        target="_blank" 
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center"
        style={{ width: '45px', height: '45px' }}
      >
        <img src={youtube} width="35" />
      </a>
      
      </div>
    </div>
  );
}

export default Footer;