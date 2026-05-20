function TestimonialCard({ name, review }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{review}</p>
    </div>
  );
}

export default TestimonialCard;