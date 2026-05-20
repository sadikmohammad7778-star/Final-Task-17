function Contact() {
  return (
    <div className="contact-wrapper">

      <h1 className="contact-title">Get In Touch</h1>

      <div className="contact-container">

        {/* LEFT SIDE */}

        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p>
            Have a project in mind? We'd love to hear about it.
            Fill out the form and we'll get back to you within
            24 hours.
          </p>

          <div className="info-box">
            <h3>📍 Visit Us</h3>
            <p>12-84 kondapur Hyderabad 502278</p>
          </div>

          <div className="info-box">
            <h3>📞 Call Us</h3>
            <p>+91 8978685563</p>
          </div>

          <div className="info-box">
            <h3>✉️ Email Us</h3>
            <p>contact@webfusion.com</p>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-form-box">

          <form>

            <label>Name *</label>

            <input
              type="text"
              placeholder="Enter Your name"
            />

            <label>Email *</label>

            <input
              type="email"
              placeholder="Enter Your EmaiId"
            />

            <label>Subject</label>

            <input
              type="text"
              placeholder="What is this regarding?"
            />

            <label>Message *</label>

            <textarea
              placeholder="Tell us about your project..."
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  );
}

export default Contact;