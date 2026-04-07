import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';

function Home() {
  return (
    <div className="container text-center mt-5">
      <Logo />
      <NavMenu />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default Home;