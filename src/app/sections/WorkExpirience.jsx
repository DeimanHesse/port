"use client";
import {
  useState,
  useRef,
  useEffect,
  Suspense,
  useMemo,
  useLayoutEffect,
} from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
  useFrameLoop,
} from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Events, animateScroll, scrollSpy } from "react-scroll";

import "./WorkExpierence.scss";

const WorkExpierence = ({ thirdSectionRef }) => {
  useEffect(() => {
    // Registering the 'begin' event and logging it to the console when triggered.
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });

    // Registering the 'end' event and logging it to the console when triggered.
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

    // Returning a cleanup function to remove the registered events when the component unmounts.
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleScroll = (delta) => {
    const scrollSpeed = 10; // Установите скорость скролла
    const easingType = "easeInOutQuart"; // Установите эффект easing

    const options = {
      // Your options here, for example:
      duration: 1500,
      smooth: true,
    };

    // Scroll an additional 10 pixels down from the current scroll position
    // animateScroll.scrollMore(10, options);
    console.log("delta", delta);
    if (delta < 0) {
      scroll.scrollMore(-150, {
        // horizontal: "true",
        // containerId: container,
        containerId: "er",
      });
      // scroll.scrollMore(-scrollSpeed, { duration: 1800, smooth: easingType });
    } else {
      // scroll.scrollMore(scrollSpeed, { duration: 1800, smooth: easingType });
      scroll.scrollMore(150, {
        // horizontal: "true",
        // containerId: container,
        containerId: "er",
        onended: () => {
          // console.log("end");
        },
      });
    }
  };

  let scroll = animateScroll;

  const scrollForward = (container) => {
    console.log("dgdfg", scroll);
    scroll.scrollMore(100, {
      // horizontal: "true",
      // containerId: container,
      containerId: "er",
      onended: () => {
        // console.log("end");
      },
    });
  };
  const scrollBackward = (container) => {
    scroll.scrollMore(-100, {
      horizontal: "true",
      // containerId: container,
      containerId: "er",
    });
  };
  return (
    <>
      <section
        ref={thirdSectionRef}
        // style={{ height: "100vh", overflow: "auto" }}
        // onWheel={(e) => handleScroll(e)}
        // onScroll={(e) => handleScroll(e)}
        className="work-expirience"

        // onWheel={(e) => handleScroll(e.deltaY || e.detail || e.wheelDelta)}
        // onScroll={(e) => handleScroll(e)}
        // onClick={(e) => handleScroll(e)}
      >
        {/* <button
          style={{
            zIndex: 800000,
            width: "200px",
            height: "100px",
            position: "absolute",
            top: 0,
          }}
          onClick={(e) => scrollForward(e)}
        >
          dfgfdgdf
        </button> */}
        <div className="work-expirience__inner">
          <div className="work-expirience__title">Опыт работы</div>
          <div className="work-expirience__content-wrapper">
            <div className="work-expirience__cards">
              <div
                onWheel={(e) =>
                  handleScroll(e.deltaY || e.detail || e.wheelDelta)
                }
                id="er"
                className="work-expirience__cards-inner"
              >
                {/* <div className="work-expirience__viniette"></div> */}
                <div className="work-expirience__card card-expierence">
                  <div className="card-expierence__date">
                    2021 - Октябрь 2022
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">Фриланс</div>
                    <div className="card-expierence__company">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Build, style, and ship high-quality websites, design
                      systems, mobile apps, and digital experiences for a
                      diverse array of projects for clients including Harvard
                      Business School, Everytown for Gun Safety, Pratt
                      Institute, Koala Health, Vanderbilt University, The 19th
                      News, and more. Provide leadership within engineering
                      department through close collaboration, knowledge shares,
                      and spearheading the development of internal tools.
                    </div>
                    <div className="card-expierence__stack">
                      Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS
                    </div>
                  </div>
                </div>
                <div className="work-expirience__card card-expierence">
                  <div className="card-expierence__date">
                    2021 - Октябрь 2022
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">Фриланс</div>
                    <div className="card-expierence__company">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Build, style, and ship high-quality websites, design
                      systems, mobile apps, and digital experiences for a
                      diverse array of projects for clients including Harvard
                      Business School, Everytown for Gun Safety, Pratt
                      Institute, Koala Health, Vanderbilt University, The 19th
                      News, and more. Provide leadership within engineering
                      department through close collaboration, knowledge shares,
                      and spearheading the development of internal tools.
                    </div>
                    <div className="card-expierence__stack">
                      Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS
                    </div>
                  </div>
                </div>
                <div className="work-expirience__card card-expierence">
                  <div className="card-expierence__date">
                    2021 - Октябрь 2022
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">Фриланс</div>
                    <div className="card-expierence__company">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Build, style, and ship high-quality websites, design
                      systems, mobile apps, and digital experiences for a
                      diverse array of projects for clients including Harvard
                      Business School, Everytown for Gun Safety, Pratt
                      Institute, Koala Health, Vanderbilt University, The 19th
                      News, and more. Provide leadership within engineering
                      department through close collaboration, knowledge shares,
                      and spearheading the development of internal tools.
                    </div>
                    <div className="card-expierence__stack">
                      Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS,Laravel, Interia, Blade, GrapesJS, VueJs, VanillaJs,
                      SCSS
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-expirience__model">
              <Canvas
                frameloop="demand"
                opacity={1}
                // ref={canvasRef}
                camera={{
                  position: [0, 5, 5],
                  fov: 75,
                  near: 0.01,
                  far: 4000,
                }}
              >
                <color attach={"background"} args={["black"]} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExpierence;

// const WorkExpierence = ({ thirdSectionRef }) => {
//   return (
//     <>
//       <section ref={thirdSectionRef} className="work-expirience">
//         <div className="work-expirience__inner">
//           <div className="work-expirience__title">Work Expirience</div>
//           <div className="work-expirience__cards">
//             <div className="work-expirience__card-wrapper">
//               <div className="work-expirience__card">
//                 <h2 className="work-expirience__card-title">
//                   Frontend-разработчик
//                 </h2>
//                 <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
//                 <p className="work-expirience__card-text">
//                   You can also call me a product designer, experience designer,
//                   interaction, UI, UX or by any other market defined
//                   function-title. I'm also a multi-disciplinary maker with over
//                   10 years of experiences in wide range of design disciplines,
//                   manager, advisor, entrepreneur, front-end developer, music
//                   enthusiast, traveler, photographer and more.
//                 </p>
//               </div>
//               <div className="work-expirience__card-date">
//                 - 2021 - Октябрь 2022
//               </div>
//             </div>
//             <div className="work-expirience__card-wrapper two">
//               <div className="work-expirience__card-date two">
//                 Октябрь 2022 - Сентябрь 2023 -
//               </div>
//               <div className="work-expirience__card">
//                 <h2 className="work-expirience__card-title">
//                   Frontend-разработчик
//                 </h2>
//                 <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
//                 <p className="work-expirience__card-text">
//                   You can also call me a product designer, experience designer,
//                   interaction, UI, UX or by any other market defined
//                   function-title. I'm also a multi-disciplinary maker with over
//                   10 years of experiences in wide range of design disciplines,
//                   manager, advisor, entrepreneur, front-end developer, music
//                   enthusiast, traveler, photographer and more.
//                 </p>
//               </div>
//             </div>
//             <div className="work-expirience__card-wrapper">
//               <div className="work-expirience__card">
//                 <h2 className="work-expirience__card-title">
//                   Frontend-разработчик
//                 </h2>
//                 <h4 className="work-expirience__card-subtitle">GoodFellaz</h4>
//                 <p className="work-expirience__card-text">
//                   You can also call me a product designer, experience designer,
//                   interaction, UI, UX or by any other market defined
//                   function-title. I'm also a multi-disciplinary maker with over
//                   10 years of experiences in wide range of design disciplines,
//                   manager, advisor, entrepreneur, front-end developer, music
//                   enthusiast, traveler, photographer and more.
//                 </p>
//               </div>
//               <div className="work-expirience__card-date">
//                 Сентябрь 2023 - Ноябрь 2023
//               </div>
//             </div>
//           </div>
//           <div className="work-expirience__line">
//             <div className="work-expirience__line-inner"></div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WorkExpierence;
