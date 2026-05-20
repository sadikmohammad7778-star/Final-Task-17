import PortfolioCard from "../Components/PortfolioCard";

function Portfolio() {

  const projects = [
    "Business Website",
    "E-Commerce Website",
    "Portfolio Website",
  ];

  return (
    <div className="portfolio-page">

      <h1>Our Portfolio</h1>

      <div className="portfolio-grid">

        {projects.map((project, index) => (
          <PortfolioCard
            key={index}
            title={project}
          />
        ))}

      </div>

    </div>
  );
}

export default Portfolio;