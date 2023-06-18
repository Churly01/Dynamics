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
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid #fff',
  };

  const navBarTitle = {
    flex: 0.5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'2em',
    border: '1px solid #fff',
  };

  return (
    <div style={navbarStyle}>
      <div style={{
        ...navbarSectionStyle,
        borderLeft: 'none',
      }}>
        Dinamica
      </div>
      <div style={navBarTitle}>
        Survival On The Moon
      </div>
      <div style={navbarSectionStyle}>
        Sobre Nosotros
      </div>
    </div>
  );
}

export default Navbar;
