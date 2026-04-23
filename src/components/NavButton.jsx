import { Link } from 'react-router-dom';

//Es la base de los botones
function NavButton({ text, to, external }) {
  const className = "nav-button";

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {text}
      </a>
    );
  }

  return (
    <Link to={to} className={className}>
      {text}
    </Link>
  );
}

export default NavButton;