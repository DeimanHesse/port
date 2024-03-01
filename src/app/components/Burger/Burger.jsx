import { useState } from "react";
import "./Burger.scss";

const Burger = ({ headerHandler }) => {
  const [active, setActive] = useState(false);

  const burgerHandler = () => {
    setActive(!active);
  };

  return (
    <div onClick={burgerHandler} className="burger">
      <div className="burger__icon">Burger</div>
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
  );
};

export default Burger;
