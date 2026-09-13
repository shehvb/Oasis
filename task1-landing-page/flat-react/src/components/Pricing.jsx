function Pricing() {
  return (
    <section id="Pricing" className="animate-on-scroll" data-animation="fade-in">
      <div className="container">
        <div className="center-txt">
          <div className="pri_txt">
            <h3>Pricing Plan</h3>
            <p>Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
          </div>
        </div>
        <div className="pri-card">
          <div className="pri-card-1">
            <div className="pri-card-img">
              <img src="/Assets/hero-img.svg" alt="" />
            </div>
            <h4>Basic</h4>
            <h2>$5.99 <span>/month</span></h2>
            <p>Perfect for personal use & beginners</p>
            <ul>
              <li><i className="fa-regular fa-circle-check"></i> 5GB Storage</li>
              <li><i className="fa-regular fa-circle-check"></i> 1 Email Account</li>
              <li><i className="fa-regular fa-circle-check"></i> No Support</li>
              <li><i className="fa-regular fa-circle-check"></i> Monthly Backups</li>
              <li><i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth</li>
            </ul>
            <button className="btn-clip-spread download-btn">
              <a href="#home">Get Started</a>
            </button>
          </div>
          <div className="pri-card-1 pri-card-1-active">
            <div className="pri-card-img">
              <img src="/Assets/hero-img.svg" alt="" />
            </div>
            <h4>Pro</h4>
            <h2>$9.99 <span>/month</span></h2>
            <p>Perfect for personal use & beginners</p>
            <ul>
              <li><i className="fa-regular fa-circle-check"></i> 20GB Storage</li>
              <li><i className="fa-regular fa-circle-check"></i> 5 Email Accounts</li>
              <li><i className="fa-regular fa-circle-check"></i> Limited Support</li>
              <li><i className="fa-regular fa-circle-check"></i> Weekly Backups</li>
              <li><i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth</li>
            </ul>
            <button className="btn-clip-spread download-btn">
              <a href="#home">Get Started</a>
            </button>
          </div>
          <div className="pri-card-1">
            <div className="pri-card-img">
              <img src="/Assets/hero-img.svg" alt="" />
            </div>
            <h4>Ultra</h4>
            <h2>$13.99 <span>/month</span></h2>
            <p>Perfect for personal use & beginners</p>
            <ul>
              <li><i className="fa-regular fa-circle-check"></i> 50GB Storage</li>
              <li><i className="fa-regular fa-circle-check"></i> 10 Email Accounts</li>
              <li><i className="fa-regular fa-circle-check"></i> 24/7 Support</li>
              <li><i className="fa-regular fa-circle-check"></i> Daily Backups</li>
              <li><i className="fa-regular fa-circle-check"></i> Unlimited Bandwidth</li>
            </ul>
            <button className="btn-clip-spread download-btn">
              <a href="#home">Get Started</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
