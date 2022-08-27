import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./App.css";
import people from "./data";
import { useEffect, useState } from "react";
function App() {
  const [personIndex, setPersonIndex] = useState(0);
  const nextSlideHandler = () => {
    setPersonIndex((prevIndex) => {
      let index = prevIndex + 1;
      if (prevIndex >= people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlideHandler = () => {
    setPersonIndex((prevIndex) => {
      let index = prevIndex - 1;
      if (prevIndex <= 0) {
        index = people.length - 1;
      }
      return index;
    });
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setPersonIndex((prevIndex) => {
        let index = prevIndex + 1;
        if (prevIndex >= people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, [personIndex]);
  return (
    <section>
      <div className="title">
        <h1>
          <span>/</span>reviews
        </h1>
      </div>
      <div className="section-center">
        {people.map((peop, index) => {
          let stateMent = "nextSlide";
          if (personIndex === people.length - 1) {
            stateMent = "lastSlide";
          }
          if (personIndex === index) {
            stateMent = "activeSlide";
          }
          const { id, name, title, image, quote } = peop;

          return (
            <article key={id} className={stateMent}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <h4 className="title">{title}</h4>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="next" onClick={nextSlideHandler}>
          <FaChevronRight className="icon" />
        </button>
        <button className="prev" onClick={prevSlideHandler}>
          <FaChevronLeft className="icon" />
        </button>
      </div>
    </section>
  );
}

export default App;
