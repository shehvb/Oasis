function Features() {
  return (
    <section id="about" className="animate-on-scroll" data-animation="fade-in">
      <div className="center">
        <div className="contain">
          <div className="animate-on-scroll" data-animation="slide-in-left">
            <h3>The future of designing starts here</h3>
            <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
            <div className="combo">
              <div className="card">
                <i className="fa-solid fa-bezier-curve"></i>
                <h5>Graphic Design</h5>
                <p>Short description for the ones who look for something new..</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-boxes-stacked"></i>
                <h5>UI/UX Design</h5>
                <p>Short description for the ones who look for something new..</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-table-cells"></i>
                <h5>Web Design</h5>
                <p>Short description for the ones who look for something new..</p>
              </div>
              <div className="card">
                <i className="fa-solid fa-desktop"></i>
                <h5>Web Development</h5>
                <p>Short description for the ones who look for something new..</p>
              </div>
            </div>
          </div>
          <div className="animate-on-scroll" data-animation="slide-in-right">
            <img src="/Assets/feature-2-1.svg" alt="" />
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Features;
