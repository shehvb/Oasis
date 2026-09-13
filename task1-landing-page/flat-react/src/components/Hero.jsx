function Hero() {
  return (
    <section id="home" className="animate-on-scroll" data-animation="fade-in">
      <div className="home">
        <div className="container home-content">
          <div className="hero_f">
            <h4>You're Using</h4>
            <h2>Free Lite Version of Template</h2>
            <p>Please, purchase full version of the template to get all sections, features and permission to remove footer credit</p>
            <button className="btn-clip-spread download-btn">Download Now</button>
          </div>
          <img src="/Assets/paattern.svg" alt="Hero Shape" className="hero_shape" />
          <div className="hero_s">
            <img src="/Assets/hero-img.svg" alt="Hero Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
