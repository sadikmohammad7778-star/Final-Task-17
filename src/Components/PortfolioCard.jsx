function PortfolioCard({ title }) {
  return (
    <div className="portfolio-card">

      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        alt="project"
        className="portfolio-image"
      />

      <h3>{title}</h3>

    </div>
  );
}

export default PortfolioCard;