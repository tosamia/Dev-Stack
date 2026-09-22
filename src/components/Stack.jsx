function Stack({
  stack,
  onRemove,
  onRemoveAll
}) {

  return (
    <aside className="stack-container">


      {/* Heading */}
      <h3 className="stack-title">
        Your Stack
      </h3>


      {/* Count */}
      <p className="stack-count">
        {stack.length} Technology Selected
      </p>


      {/* Empty stack */}
      {stack.length === 0 ? (

        <div className="empty-stack">

          <p>
            Your stack is empty.
          </p>

          <p>
            Add technologies to build your stack.
          </p>

        </div>

      ) : (


        /* Selected technologies */
        <div className="stack-items">

          {stack.map((technology) => (

            <div
              className="stack-item"
              key={technology.id}
            >

              <div className="stack-item-left">

                <img
                  src={technology.icon}
                  alt={technology.name}
                />

                <div>

                  <div className="stack-item-name">
                    {technology.name}
                  </div>

                  <div className="stack-item-category">
                    {technology.category}
                  </div>

                </div>

              </div>


              {/* Remove one */}
              <button
                className="remove-button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
              >
                ×
              </button>

            </div>

          ))}

        </div>

      )}


      {/* Remove all */}
      {stack.length > 0 && (

        <button
          className="remove-all-button"
          onClick={onRemoveAll}
        >
          Remove All
        </button>

      )}

    </aside>
  );
}


export default Stack;