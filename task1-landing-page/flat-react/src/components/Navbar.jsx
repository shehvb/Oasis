function Navbar() {
  return (
    <nav className="nav">
      <div className="container nav-content">
        <div>
          <img src="/Assets/logo.svg" alt="Logo" />
        </div>
        <div className="nav_items">
          <nav className="navbar">
            <a href="#home" className="nav-item">Home</a>
            <a href="#about" className="nav-item">About</a>
            <a href="#services" className="nav-item">Services</a>
            <a href="#Pricing" className="nav-item">Pricing</a>
            <a href="#contact" className="nav-item">Contact</a>
            <button className="btn-clip-spread">Get started</button>
          </nav>
        </div> 
      </div>
    </nav>
  );
}

export default Navbar;
