import Logo from '../components/Logo';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import Whatsapp from '../components/Whatsapp';
import background from '../assets/img/background.jpg';

function Home() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      
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
          zIndex: 1,
        }}
      />

      {/* Contenido */}
      <div className="container text-center mt-5">
        <Logo />
        <NavMenu />
        <Whatsapp />
        <Footer />
      </div>

    </div>
  );
}

export default Home;