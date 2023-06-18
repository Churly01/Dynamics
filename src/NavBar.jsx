import { NavLink } from 'react-router-dom';
import './index.css';

function Navbar() {
  const navbarStyle = {
    position: 'sticky',
    top: 0,
    display: 'flex',
    width: '100%',
    height: '10vh',
    backgroundColor: '#333',
    color: '#fff',
  };

  const navbarSectionStyle = {
    flex: 0.25,
    display: 'flex',
    fontSize: '1.5em',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const navBarTitle = {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
  };

  return (
    <div style={navbarStyle}>
      <NavLink className="linkButton" to="/" style={{
        ...navbarSectionStyle,
        borderLeft: 'none',
      }}>
        Dinamica
      </NavLink>
      <NavLink to="/" className="linkButton" style={navBarTitle}>
        Survival On The Moon
      </NavLink>
      <NavLink to="/about_us" className="linkButton" style={navbarSectionStyle}>
        About us
      </NavLink>
    </div>
  );
}

export default Navbar;
