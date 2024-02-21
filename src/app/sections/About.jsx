import Image from "next/image";
const About = ({ secondSectionRef }) => {
  // const blurFilter = useMemo(() => new BlurFilter(4), []);
  return (
    <>
      <section ref={secondSectionRef} className="about">
        <div className="about__title">About</div>
        <div className="about__content">
          <div className="about__text">
            <p className="about-text">
              {/* You can also call me a product designer, experience
                      designer, interaction, UI, UX or by any other market
                      defined function-title. I'm also a multi-disciplinary
                      maker with over 10 years of experiences in wide range of
                      design disciplines, manager, advisor, entrepreneur,
                      front-end developer, music enthusiast, traveler,
                      photographer and more. */}
              Здравствуйте! Меня зовут Александр Матвеев. Я Frontend-разработчик
              из города Калуга. Первый сайт создал ещё в школе на хостинге
              Яндекс.Народ. С того времени начал интересоваться веб-разработкой:
              появился опыт работы с HTML и CSS, научился верстать сайты. На
              данный момент работаю Frontend-разработчиком в компании АО
              «Торговый дом «ПЕРЕКРЕСТОК». Занимаюсь поддержкой и развитием
              сайта
            </p>
            <p className="about-text">
              You can also call me a product designer, experience designer,
              interaction, UI, UX or by any other market defined function-title.
              I'm also a multi-disciplinary maker with over 10 years of
              experiences in wide range of design disciplines, manager, advisor,
              entrepreneur, front-end developer, music enthusiast, traveler,
              photographer and more. You can also call me a product designer,
              experience designer, interaction, UI, UX or by any other market
              defined function-title. I'm also a multi-disciplinary maker with
              over 10 years of experiences in wide range of design disciplines,
              manager, advisor, entrepreneur, front-end developer, music
              enthusiast, traveler, photographer and more. more. You can also
              call me a product designer, experience designer, interaction, UI,
              UX or by any other market defined function-title. I'm also a
              multi-disciplinary maker with over 10 years of experiences in wide
              range of design disciplines, manager, advisor, entrepreneur,
              front-end developer, music enthusiast, traveler, photographer and
              more.
            </p>
          </div>
          <div className="about__image">
            <Image
              // className={styles.bgImg}
              src="/images/aboutSection/aboutPhoto.jpg"
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
      </section>
    </>
  );
};

export default About;
