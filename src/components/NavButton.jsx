import { Link } from 'react-router-dom';

function NavButton({ text, to, external }) {
  if (external) {
    return (
      <a href={to} target="_blank" className="nav-button d-block my-2">
        {text}
      </a>
    );
  }

  return (
    <Link to={to} className="nav-button d-block my-2">
      {text}
    </Link>
  );
}

export default NavButton;