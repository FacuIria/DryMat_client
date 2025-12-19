import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/assets/DM_Logo_DryMat_Transparent.png" alt="Logo DryMat" style={{height: '100px'}} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;