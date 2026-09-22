import TechnologyCard from "./TechnologyCard";


function TechnologyList({
  technologies,
  stack,
  onAddToStack
}) {

  return (
    <div className="technology-area">


      {/* Section heading */}
      <div className="section-heading">

        <h2>
          Explore the{" "}
          <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>

      </div>


      {/* Cards */}
      <div className="technology-grid">

        {technologies.map((technology) => (

          <TechnologyCard
            key={technology.id}
            technology={technology}
            stack={stack}
            onAddToStack={onAddToStack}
          />

        ))}

      </div>

    </div>
  );
}


export default TechnologyList;