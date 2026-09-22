function TechnologyCard({
  technology,
  stack,
  onAddToStack
}) {


  // Check whether this technology
  // is already selected
  const isAdded = stack.some(
    (item) => item.id === technology.id
  );


  return (
    <div className="technology-card">


      {/* Top */}
      <div className="card-top">

        <img
          src={technology.icon}
          alt={technology.name}
          className="tech-icon"
        />

        <span className="badge">
          {technology.badge}
        </span>

      </div>


      {/* Name */}
      <h3>
        {technology.name}
      </h3>


      {/* Description */}
      <p className="technology-description">
        {technology.description}
      </p>


      {/* Information */}
      <div className="card-info">

        <div className="card-left-info">

          <span className="category">
            {technology.category}
          </span>

          <span className="difficulty">
            {technology.difficulty}
          </span>

        </div>


        <span className="rating">
          ★ {technology.rating}
        </span>

      </div>


      {/* Add button */}
      <button
        className="add-button"
        disabled={isAdded}
        onClick={() => onAddToStack(technology)}
      >

        {isAdded
          ? "✓ Added to Stack"
          : "Add to Stack"
        }

      </button>

    </div>
  );
}


export default TechnologyCard;