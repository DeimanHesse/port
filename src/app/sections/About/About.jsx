import Image from "next/image";
import "./About.scss";
const About = ({ secondSectionRef }) => {
  // const blurFilter = useMemo(() => new BlurFilter(4), []);
  return (
    <>
      <section ref={secondSectionRef} className="about">
        <div className="about__title">Обо мне</div>
        <div className="about__content-wrapper">
          <div className="about__content">
            <div className="about__image">
              <Image
                // className={styles.bgImg}
                // src="/images/aboutSection/aboutPhoto.jpg"
                src="/images/about/about2.jpg"
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
            <div className="about__text">
              <p>
                Здравствуйте! Меня зовут Дмитрий Сиников. Я Frontend-разработчик
                из города Гродно.Интересна работа с визуалом, в общем. В
                частности же, вёрстка, разработка UX/UI, дизайн. Заинтересован
                не только в грамотном выполнении своей части работы, но и в
                качественном исполнении проекта в целом, поэтому стараюсь
                обращать внимание и на смежные со своей области. Например,
                помимо, разработки клиентской части веб - приложения, считаю
                нужным изучить бэк-энд, так как хочу, при необходимости,
                создавать рабочие прототипы или небольшие проекты целиком.
                Знание бэкенда, также, позволит сделать работу в команде
                (например, при взаимодействии с разработчиками серверной части)
                более эффективной и комфортной.
              </p>

              <div className="about__text-stack">
                <p>
                  Основной стек: Next, React, JS, TS, ThreeJS, React3fiber,
                  GSAP, Git
                </p>
                <p>Стилизация: scss, css-modules, Tailwind</p>
                <p>Сборщики: Webpack, Vite</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
