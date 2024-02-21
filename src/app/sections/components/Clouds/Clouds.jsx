import * as THREE from "three";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Clouds,
  Cloud,
  CameraControls,
  Sky as SkyImpl,
  StatsGl,
} from "@react-three/drei";
import { useControls } from "leva";

const CloudsComp = () => {
  return (
    <>
      {/* <StatsGl /> */}
      <Sky />
    </>
  );
};

export default CloudsComp;

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
  useFrame((state, delta) => {
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 25;
    ref.current.rotation.y = state.clock.elapsedTime / 2 / 25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 25;
    // cloud0.current.rotation.y -= delta;
  });
  return (
    <>
      {/* <SkyImpl /> */}
      <group ref={ref}>
        <Clouds
          position={[0, 0, -400]}
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
            // concentrate="outside"
            growth={1000}
            color={"white"}
            opacity={0.25}
            seed={0.1}
            bounds={[1200, 10, 500]}
            volume={800}
            segments={30}
          />
          <Cloud
            position={[0, 0, 400]}
            // concentrate="outside"
            growth={1000}
            color={"white"}
            opacity={0.045}
            seed={0.1}
            bounds={[1200, 10, 500]}
            volume={800}
            segments={10}
          />
          <Cloud
            position={[0, 0, 700]}
            // concentrate="outside"
            growth={1000}
            // color="#ffccdd"
            color={"white"}
            opacity={0.055}
            seed={0.1}
            bounds={[1200, 10, 500]}
            volume={800}
            segments={30}
          />
          <Cloud
            position={[0, 0, 300]}
            // concentrate="outside"
            growth={1000}
            // color="#ffccdd"
            color={"white"}
            opacity={0.5}
            seed={0.1}
            bounds={[1200, 10, 500]}
            volume={800}
            segments={30}
          />

          {/* <Cloud
            // concentrate="outside"
            growth={10}
            color="#ffccdd"
            opacity={0.25}
            seed={0.1}
            bounds={[100, 120, 1000]}
            volume={1000}
            segments={100}
          /> */}
        </Clouds>
      </group>
    </>
  );
}