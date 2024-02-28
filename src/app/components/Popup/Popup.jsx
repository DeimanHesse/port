"use client";
import Link from "next/link";
import Image from "next/image";
import "./Popup.scss";
const Popup = ({ data, workExampleRef, popup, popupCall, popupData }) => {
  return (
    <section
      ref={workExampleRef}
      tabIndex="0"
      onKeyDown={popupCall}
      className={popup ? "work-example active" : "work-example"}
      autoFocus={popup ? true : false}
    >
      <div className="work-example__content">
        <div className="work-example__description">
          <button className="work-example__button-back" onClick={popupCall}>
            Назад
          </button>
          <div className="work-example__description-title">
            {popupData.title}
          </div>
          <div className="work-example__description-inner">
            <div className="work-example__description-item">
              <div className="work-example__description-item-title">
                Описание деятельности компании:
              </div>
              <div className="work-example__description-item-text">
                {popupData.title}
              </div>
            </div>
            <div className="work-example__description-item">
              <div className="work-example__description-item-title">
                Технический стек:
              </div>
              <div className="work-example__description-item-text">
                {popupData.stack}
              </div>
            </div>
            <div className="work-example__description-item">
              <div className="work-example__description-item-title">
                Выполняемые работы:
              </div>
              <div className="work-example__description-item-text">
                <ul>
                  <li>Вёрстка</li>
                  <li>Написание запросов на фронте</li>
                  <li>Круд-на бэке</li>
                  <li>Поддержка легаси кода</li>
                </ul>
              </div>
            </div>
          </div>
          <a href={popupData.work_link} target="_blank">
            <button className="work-example__button-visit">
              посетить сайт
            </button>
          </a>
        </div>
        <div className="work-example__image-wrapper">
          <div className="work-example__image-inner">
            <div className="work-example__image">
              <Image
                // className={styles.bgImg}
                // src="/images/aboutSection/aboutPhoto.jpg"
                src={popupData.picture}
                priority
                sizes="(max-width: 900px) 100vw, (max-width: 1920px) 50vw"
                alt=""
                layout="fit"
                width={500}
                height={500}
                // objectFit="cover"
                // width={"100%"}
                // height={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popup;
