import { useEffect, useState } from "react";

import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyList from "./components/TechnologyList";
import Stack from "./components/Stack";
import Footer from "./components/Footer";


function App() {

  // Stores all technology data
  const [technologies, setTechnologies] = useState([]);

  // Shows loading message while JSON is loading
  const [loading, setLoading] = useState(true);

  // Stores selected technologies
  const [stack, setStack] = useState([]);


  // Load JSON data
  useEffect(() => {

    fetch("/data/technologies.json")
      .then((response) => {

        if (!response.ok) {
          throw new Error("Could not load technology data");
        }

        return response.json();
      })
      .then((data) => {

        setTechnologies(data);
        setLoading(false);

      })
      .catch((error) => {

        console.error(error);
        setLoading(false);

        toast.error("Failed to load technologies");

      });

  }, []);


  // Add technology to stack
  const handleAddToStack = (technology) => {

    // Check duplicate
    const alreadyExists = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {

      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }


    // Add technology
    setStack((previousStack) => [
      ...previousStack,
      technology
    ]);


    toast.success(
      `${technology.name} added to your stack!`
    );
  };


  // Remove one technology
  const handleRemoveFromStack = (id) => {

    const removedTechnology = stack.find(
      (item) => item.id === id
    );


    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );


    if (removedTechnology) {

      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );

    }
  };


  // Remove everything
  const handleRemoveAll = () => {

    if (stack.length === 0) {
      return;
    }


    setStack([]);

    toast.info("All technologies removed from your stack.");
  };


  return (
    <div className="app">

      {/* Navigation */}
      <Navbar />


      {/* Hero section */}
      <Hero />


      {/* Main technology section */}
      <main>

        <section
          className="technology-section"
          id="technologies"
        >

          {loading ? (

            <div className="loading">
              <div className="spinner"></div>

              <p>
                Loading technologies...
              </p>
            </div>

          ) : (

            <>
              <TechnologyList
                technologies={technologies}
                stack={stack}
                onAddToStack={handleAddToStack}
              />

              <Stack
                stack={stack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </>

          )}

        </section>

      </main>


      {/* Footer */}
      <Footer />


      {/* React Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

    </div>
  );
}


export default App;