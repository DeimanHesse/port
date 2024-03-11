"use client";
import { useEffect, useState } from "react";
import "./Header.scss";

const Header = ({ headerHandler, headerVisible, headerState }) => {
  const [active, setActive] = useState(false);
  console.log("ffff", headerVisible.current);
  const burgerHandler = () => {
    setActive(!active);
  };

  return (
    <header className={headerState ? "header" : "header invisible"}>
      <nav className="navigation">
        <ul>
          <li>
            <a onClick={(e) => headerHandler(e)} id="1" href="/">
              Главная
            </a>
          </li>
          <li>
            <a onClick={(e) => headerHandler(e)} id="2" href="/about">
              Обо мне
            </a>
          </li>
          <li>
            <a onClick={(e) => headerHandler(e)} id="3" href="/expirience">
              Опыт работы
            </a>
          </li>
          <li>
            <a onClick={(e) => headerHandler(e)} id="4" href="/works">
              Портфолио
            </a>
          </li>
          <li>
            <a onClick={(e) => headerHandler(e)} id="5" href="/contacts">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      {/* <Burger headerHandler={headerHandler} /> */}
      <div className="burger">
        <div onClick={burgerHandler} className="burger__icon">
          <div className="burger__icon-inner">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className={active ? "burger__inner active" : "burger__inner"}>
          <nav className="buger__nav">
            <ul>
              <li>
                <a onClick={(e) => headerHandler(e)} id="1" href="/">
                  Главная
                </a>
              </li>
              <li>
                <a onClick={(e) => headerHandler(e)} id="2" href="/about">
                  Обо мне
                </a>
              </li>
              <li>
                <a onClick={(e) => headerHandler(e)} id="3" href="/expirience">
                  Опыт работы
                </a>
              </li>
              <li>
                <a onClick={(e) => headerHandler(e)} id="4" href="/works">
                  Портфолио
                </a>
              </li>
              <li>
                <a onClick={(e) => headerHandler(e)} id="5" href="/contacts">
                  Контакты
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
