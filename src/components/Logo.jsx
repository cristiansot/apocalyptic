import logo from '../assets/img/apoca_logo.svg';

function Logo() {
  return (
    <div className="text-center mt-4">
      <img src={logo} alt="logo" style={{ maxWidth: '600px' }} />
    </div>
  );
}

export default Logo;