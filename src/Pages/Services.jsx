
function Services() {
  return (
    <div className="services-page">

      <h1>Our Services</h1>

      <p className="services-subtitle">
        Comprehensive solutions for your digital needs
      </p>

      <div className="services-grid">

        {/* CARD 1 */}

        <div className="service-card">
          <div className="service-icon">🌐</div>

          <h2>Web Development</h2>

          <p>
            Custom websites and web applications
            built with modern technologies.
          </p>
        </div>

        {/* CARD 2 */}

        <div className="service-card">
          <div className="service-icon">📱</div>

          <h2>Mobile Apps</h2>

          <p>
            Native and cross-platform mobile
            applications for iOS and Android.
          </p>
        </div>

        {/* CARD 3 */}

        <div className="service-card">
          <div className="service-icon">🎨</div>

          <h2>UI/UX Design</h2>

          <p>
            Beautiful, intuitive designs that
            users love.
          </p>

        </div>

      </div>
    </div>
  );
}

export default Services;