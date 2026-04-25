import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import background from '../assets/img/background.jpg';

function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', alignContent: 'center'}}>
      
      {/* Fondo */}
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

      {/* Contenido */}
      <div className="container text-center mt-5"
      style={{ position: 'relative', zIndex: 1 }}
      >
        <Logo />
        <NavMenu />
        <Whatsapp />
        <Footer />
      </div>

    </div>
  );
}

export default Home;