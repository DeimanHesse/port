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
                из города Гродно. Первый сайт создал ещё в школе на хостинге
                Яндекс.Народ. С того времени начал интересоваться
                веб-разработкой: появился опыт работы с HTML и CSS, научился
                верстать сайты. На данный момент работаю Frontend-разработчиком
                в компании АО «Торговый дом «ПЕРЕКРЕСТОК». Занимаюсь поддержкой
                и развитием сайта
              </p>

              <div className="about__text-stack">
                Стек: Next, React, JS, TS, ThreeJS, React3fiber, GSAP, SCSS,
                Tailwind, Git
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
