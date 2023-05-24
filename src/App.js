import React, { useState } from "react";
import "./style.scss";
import building from "./assest/building.webp";

function App() {
  const [hoverDropdown, setHoverDropdown] = useState(false);

  return (
    <div className="aleph">
      <div className="aleph__title">Aleph Lab Test Frontend </div>
      <div className="aleph__number1">
        <div className="aleph__number1__number">1.</div>
        <div className="aleph__number1__answer">
          <div className="aleph__number1__answer__card">
            <div className="aleph__number1__answer__card__title">
              Little Known Facts
            </div>
            <div className="aleph__number1__answer__card__sub">
              All the Lorem Ipsum generators on the Internet tend to repeat
              predefined chunks as necessary
            </div>
          </div>
        </div>
      </div>
      <div className="aleph__number2">
        <div className="aleph__number2__number">2.</div>
        <div className="aleph__number2__box">
          <div
            className="aleph__number2__box__top"
            onMouseEnter={() => setHoverDropdown(true)}
            onMouseLeave={() => setHoverDropdown(false)}
          >
            Our Works
          </div>
          {hoverDropdown === true ? (
            <div
              className="aleph__number2__box__body"
              onMouseEnter={() => setHoverDropdown(true)}
              onMouseLeave={() => setHoverDropdown(false)}
            >
              <div
                className="aleph__number2__box__body__item mgt-10"
                onClick={() => setHoverDropdown(false)}
              >
                <span>UI&UX Design</span>
              </div>
              <div
                className="aleph__number2__box__body__item"
                onClick={() => setHoverDropdown(false)}
              >
                <span>Web Development</span>
              </div>
              <div
                className="aleph__number2__box__body__item mgb-10"
                onClick={() => setHoverDropdown(false)}
              >
                <span>Mobile Development</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="aleph__number3">
        <div className="aleph__number3__number">3.</div>

        <div className="aleph__number3__table">
          <div className="aleph__number3__table__title">
            Resep Telor Ceplok:
          </div>
          <div className="aleph__number3__table__box">
            <div className="aleph__number3__table__box__item">
              Telor ayam 1 butir
            </div>
            <div className="aleph__number3__table__box__item">
              Minyak goreng 1/2 cup
            </div>
            <div className="aleph__number3__table__box__item">
              Garam 1/2 sendok teh
            </div>
            <div className="aleph__number3__table__box__item">
              Merica 1/2 sendok teh
            </div>
            <div className="aleph__number3__table__box__item">
              Butter 1/2 sendok makan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
