import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import youtube from '../assets/img/youtube.svg';
import bandcamp from '../assets/img/bandcamp.svg';

function Footer() {
  return (
    <div className="text-center mt-5 contact">
      <p>++569 6238 6663</p>
      <p>info@apocalypticprods.com</p>

      <div className="d-flex justify-content-center align-items-center gap-4 mt-4">
        <a href="#"><img src={bandcamp} width="70" /></a>
        <a href="#"><img src={facebook} width="14" /></a>
        <a href="#"><img src={instagram} width="30" /></a>
        <a href="#"><img src={youtube} width="35" /></a>
      </div>
    </div>
  );
}

export default Footer;