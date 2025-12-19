import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          {/* Espacio reservado para logo futuro */}
          <div className="logo-placeholder">
            {/* <img src="/logo.png" alt="DryMat Logo" /> */}
          </div>
          <Link to="/" className="navbar-brand">
            <h1>DryMat</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;