import Hero from "../Components/Hero";

function Home() {
  return (
    <div>

      <Hero />

      {/* WHY CHOOSE US */}

      <section className="why-section">

        <h1>Why Choose Us?</h1>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">🚀</div>

            <h2>Fast & Reliable</h2>

            <p>
              Lightning-fast performance with
              99.9% uptime guarantee.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🎨</div>

            <h2>Creative Design</h2>

            <p>
              Unique and modern designs tailored
              to your brand.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">💡</div>

            <h2>Innovative Solutions</h2>

            <p>
              Cutting-edge technology for your
              business needs.
            </p>
          </div>

          <div className="why-card">
            <div className="why-icon">🤝</div>

            <h2>24/7 Support</h2>

            <p>
              Dedicated support team always
              ready to help.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="stats-section">

        <div className="stats-box">
          <h1>500+</h1>
          <p>Projects Completed</p>
        </div>

        <div className="stats-box">
          <h1>200+</h1>
          <p>Happy Clients</p>
        </div>

        <div className="stats-box">
          <h1>50+</h1>
          <p>Team Members</p>
        </div>

        <div className="stats-box">
          <h1>10+</h1>
          <p>Years Experience</p>
        </div>

      </section>

    </div>
  );
}

export default Home;