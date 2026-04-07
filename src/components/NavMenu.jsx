import NavButton from './NavButton';

function NavMenu() {
  return (
    <div className="text-center mt-4">
      <NavButton text="Releases" to="/releases" />
      <NavButton text="Store" to="https://apocalypticprods.com/store" external />
      <NavButton text="How to buy?" to="/how-to-buy" />
      <NavButton text="Write to me" to="/contact" />
    </div>
  );
}

export default NavMenu;