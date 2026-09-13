function About() {
  return (
    <>
      <section id="services" className="about-section about-style-3 animate-on-scroll" data-animation="fade-in">
        <div className="container">
          <div className="about-wrap">
            <div className="animate-on-scroll" data-animation="slide-in-left">
              <div>
                <img src="/Assets/about-img.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 animate-on-scroll" data-animation="slide-in-right">
              <div>
                <div>
                  <h3>The future of designing starts here</h3>
                  <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed, Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed,</p>
                </div>
                <div className="wrapper">
                  <div className="bord">
                    <h4>123M</h4>
                    <h6>Happy Client</h6>
                  </div>
                  <div className="bord">
                    <h4>1434K</h4>
                    <h6>Project Done</h6>
                  </div>
                  <div>
                    <h4>134K</h4>
                    <h6>Award Win</h6>
                  </div>
                </div>
                <button className="btn-clip-spread download-btn">
                  <a href="#home" className="button button-lg radius-3 wow fadeInUp" data-wow-delay=".7s" style={{ visibility: 'visible', animationDelay: '0.7s', animationName: 'fadeInUp' }}>Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="free-part animate-on-scroll" data-animation="fade-in">
          <h4>You're Using</h4>
          <h2 className="mb-30 wow fadeInUp">Free Lite Version of Template</h2>
          <p className="mb-50 wow fadeInUp">Please, purchase full version of the template to get all sections, features and permission to remove footer credit</p>
          <div className="buttons">
            <button className="btn-clip-spread download-btn">
              <a href="https://themewagon.com/themes/flat/">Download Now</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
