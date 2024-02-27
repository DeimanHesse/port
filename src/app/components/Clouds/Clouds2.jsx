import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky as SkyImpl,
  StatsGl,
} from "@react-three/drei";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CloudsComp2 = ({ userAgent }) => {
  if (userAgent && userAgent.toLowerCase().includes("mobile")) {
    // console.log("NOagent");
    return;
  } else {
    // console.log("agent");
    // console.log(userAgent);
    return (
      <>
        <Sky />
      </>
    );
  }
};

export default CloudsComp2;

function Sky() {
  const ref = useRef();
  const cloud0 = useRef();
  // const { color, x, y, z, range, ...config } = useControls({
  //   seed: { value: 1, min: 1, max: 100, step: 1 },
  //   segments: { value: 20, min: 1, max: 80, step: 1 },
  //   volume: { value: 6, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 10, min: 0, max: 400, step: 1 },
  //   growth: { value: 4, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
  //   x: { value: 6, min: 0, max: 100, step: 1 },
  //   y: { value: 10, min: 0, max: 100, step: 1 },
  //   z: { value: 1, min: 0, max: 100, step: 1 },
  //   color: "white",
  // });

  // useGSAP(
  //   () => {
  //     gsap.to(ref.current, { y: Math.cos(state.clock.elapsedTime / 2) / 25 }); // <-- automatically reverted
  //   },
  //   { scope: container }
  // ); // <-- scope is for selector text (optional)
  const fps = 20;
  const interval = 1000 / fps;
  let then = 0;

  const { invalidate, camera, gl } = useThree();
  useFrame((state, delta) => {
    const now = Date.now();
    const elapsed = now - then;

    if (elapsed > interval) {
      ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 25;
      ref.current.rotation.y = state.clock.elapsedTime / 2 / 8;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 25;
      // cloud0.current.rotation.y -= delta;
      ref.current.addEventListener("change", invalidate);
      then = now - (elapsed % interval);
    }
  });
  return (
    <>
      {/* <SkyImpl /> */}
      <group position={[260, 1350, 200]} ref={ref}>
        <Clouds
          // position={[0, 0, 100]}
          material={THREE.MeshLambertMaterial}
          limit={50}
          // range={range}
        >
          {/* <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} /> */}
          {/* <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} /> */}
          {/* <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#eed0d0"
            seed={2}
            position={[15, 0, 0]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#d0e0d0"
            seed={3}
            position={[-15, 0, 0]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#a0b0d0"
            seed={4}
            position={[0, 0, -12]}
          />
          <Cloud
            {...config}
            bounds={[x, y, z]}
            color="#c0c0dd"
            seed={5}
            position={[0, 0, 12]}
          /> */}
          <Cloud
            // position={[0, 0, 0]}
            // concentrate="outside"
            growth={600}
            color={"white"}
            opacity={0.45}
            seed={0.1}
            bounds={[720, 300, 350]}
            volume={1800}
            segments={14}
          />
        </Clouds>
      </group>
    </>
  );
}
