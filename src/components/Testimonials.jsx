import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./userData.js";
import "./Testimonials.css";

const Testimonials = () => {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

  const showPreviousCard = () => {
    setIndex(prevIndex => prevIndex - 1);
  };

  const showNextCard = () => {
    setIndex(prevIndex => prevIndex + 1);
  };

  useEffect(() => {
    if (index > people.length - 1) {
      setIndex(0);
    } else if (index < 0) {
      setIndex(people.length - 1);
    }
  }, [index, people]);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => {
      clearInterval(slideInterval);
    };
  }, [index]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-centert'>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";

          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={`${position} article`} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button onClick={showPreviousCard} className='prev'>
          <FiChevronLeft />
        </button>
        <button onClick={showNextCard} className='next'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
