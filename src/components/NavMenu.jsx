import NavButton from "./NavButton";
import '../assets/css/navmenu.css';

//Se muestra en el Index
function NavMenu() {
  return (
    <nav className="navmenu">
      <NavButton text="Releases" to="/releases" />
      <NavButton text="Store" to="https://apocalypticprods.com/store" external />      
    </nav>
  );
}

export default NavMenu;