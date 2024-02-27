import Popup from "../../components/Popup";
import { useState, useRef } from "react";

const Works = ({ fourSectionRef, workExamples, popupCall }) => {
  const workExampleRef = useRef();

  return (
    <>
      <section ref={fourSectionRef} className="works">
        <div className="works__inner">
          <div className="works__title">Works</div>
          <div className="works__cards">
            {workExamples.map((work, index) => (
              <div key={index} className="works__card card">
                <div className="card__face-1">
                  <div className="card__face-1-inner">
                    <div className="card__face-1-title">{work.title}</div>
                    {/* <img src="/images/tech.png" alt="" /> */}
                  </div>
                </div>
                <div className="card__face-2">
                  <p>{work.short_description}</p>
                  <button
                    className="card__button"
                    onClick={() => popupCall(index)}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
