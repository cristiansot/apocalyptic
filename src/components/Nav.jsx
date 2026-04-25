import NavButton from './NavButton';
import '../assets/css/nav.css';
import logo from '../assets/img/apoca_logo.svg';
import background from '../assets/img/background.jpg';

function Nav() {
  return (
    <div className="nav-wrapper">
       <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: 0,
              }}
            />
      <img src={logo} alt="Apocalyptic logo" className="nav-logo" />

      <nav className="nav">
        <NavButton text="Home" to="/" />
           <span className='nav-button'
              style={{
                color: "#540111",
                pointerEvents: "none"
              }}
            >
              Releases
            </span>
        <NavButton text="Store" to="https://apocalypticprods.com/store" external />
      </nav>
    </div>
  );
}

export default Nav;