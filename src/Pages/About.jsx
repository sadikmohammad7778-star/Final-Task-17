function About() {
  return (
    <div className="about-page">
      <h1 className="about-title">About Us</h1>

      {/* ABOUT SECTION */}

      <div className="about-container">
        {/* LEFT CONTENT */}

        <div className="about-content">
          <h2>Our Story</h2>

          <p>
            Founded in December 2025, WebFusion started with a simple mission:
            to help businesses succeed online through beautiful,functional websites.
          </p>

          <p>
           We began as a small team of passionate designers and
           developers has grown into a modern digital agency
           serving clients worldwide.
          </p>

          <h2>Our Mission</h2>

          <p>
            To empower businesses with innovative digital solutions
            that drive growth, engage audiences, and create lasting
            online experiences.
          </p>

          <h2>Our Values</h2>

          <ul>
            <li>✨ Excellence in everything we do</li>
            <li>🤝 Integrity and transparency</li>
            <li>💡 Innovation and creativity</li>
            <li>🌍 Client success is our success</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}

        <div className="about-image">
          <div className="image-box">
            📌
          </div>
        </div>
      </div>

      {/* TEAM SECTION */}

      <section className="team-section">
        <h1>Meet Our Team</h1>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-icon">👨🏻‍💼</div>
            <h3>Maragouni saikiran</h3>
            <p>CEO & Founder</p>
          </div>

          <div className="team-card">
            <div className="team-icon">🧑‍🎨</div>
            <h3>Pathinti Avinash Reddy</h3>
            <p>Creative Director</p>
          </div>

          <div className="team-card">
            <div className="team-icon">👨‍💻</div>
            <h3>Mohammad Sadik</h3>
            <p>Lead Developer</p>
          </div>

          <div className="team-card">
            <div className="team-icon">👩‍🎨</div>
            <h3>Swarun GowriShetty</h3>
            <p>UI/UX Designer</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;