"use client";
import { useEffect, Suspense, useMemo, useLayoutEffect, useRef } from "react";
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Events, animateScroll, scrollSpy } from "react-scroll";

import { OrbitControls } from "@react-three/drei";

import "./Expierence.scss";

function Room() {
  const gantelRef = useRef(null);
  useFrame((state) => {
    // gantelRef.current.rotation.x += 0.01;
    // gantelRef.current.rotation.y += 0.005;
  });
  // const gltf = useLoader(GLTFLoader, "/rat.gltf");
  // const gltf = useLoader(GLTFLoader, "models/untitled.glb");
  const gltf = useLoader(GLTFLoader, "models/bloombox.glb");
  return (
    <group ref={gantelRef}>
      <primitive object={gltf.scene} />;
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </group>
  );
}

const Expierence = ({ thirdSectionRef }) => {
  const ref = useRef();

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
        className="work-expirience"

        // onWheel={(e) => handleScroll(e.deltaY || e.detail || e.wheelDelta)}
        // onScroll={(e) => handleScroll(e)}
        // onClick={(e) => handleScroll(e)}
      >
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
                    Февраль 2022 - Октябрь 2022
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">Фриланс</div>
                    <div className="card-expierence__position">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Период обучения. В основном, выполнял различные задачи по
                      вёрстке. Некоторое время работал аутстафф на крупном
                      проекте. В рамках обучения создал блог на react и express,
                      магазин пиццерии на Next js и nest, также сделал чат на
                      вебсокетах: express на бэке и клиенты на react js для веба
                      и react native для мобильных устройств
                    </div>
                    <div className="card-expierence__stack">
                      React, JS, SCSS, Express, Nest, Gulp
                    </div>
                  </div>
                </div>
                <div className="work-expirience__card card-expierence">
                  <div className="card-expierence__date">
                    Октябрь 2022 - Сентябрь 2023
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">Goodfellazz</div>
                    <div className="card-expierence__position">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Занимался разработкой фронтенда на Laravel Blade, со
                      стороны бэкэнда делал несложные задачи в рамках CRUD,
                      работал с tailwind, занимался поддержкой сайтов с легаси
                      кодом, работал в команде
                    </div>
                    <div className="card-expierence__stack">
                      Laravel, Interia, Blade, GrapesJS, Vue, JS, Tailwind,
                      SCSS, Gulp
                    </div>
                  </div>
                </div>

                <div className="work-expirience__card card-expierence">
                  <div className="card-expierence__date">
                    Сентябрь 2023 - Ноябрь 2023
                  </div>
                  <div className="card-expierence__content">
                    <div className="card-expierence__company">
                      KolibriStudio
                    </div>
                    <div className="card-expierence__position">
                      Frontend-developer
                    </div>
                    <div className="card-expierence__work-description">
                      Работал над несколькими проектами. В мои задачи входила
                      верстка на нативном js, разработка интерактивных
                      компонентах, реализация анимаций Также работал с Next js
                    </div>
                    <div className="card-expierence__stack">
                      Next, TS, JS, Pug, SCSS, CSSModules, Vite
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-expirience__model">
              <Canvas
                // frameloop="demand"
                opacity={1}
                // ref={canvasRef}
                camera={{
                  position: [0, 5, 20],
                  fov: 75,
                  near: 0.01,
                  far: 4000,
                }}
              >
                <ambientLight intensity={2} />

                <directionalLight
                  color={"white"}
                  position={[0, -200, 1700]}
                  intensity={5}
                />
                <Room />

                <OrbitControls
                // target={[0, 0, -330]}
                // ref={cameraRef}
                // onChange={(e) => orbChange(e)}
                // enableZoom={false}
                // enableRotate={false}
                />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Expierence;