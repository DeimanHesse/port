"use client";
import { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

const Moon = ({ position, referens }) => {
  const ref = useRef();
  const [mainMap] = useLoader(TextureLoader, ["images/moon/moon.avif"]);

  return (
    <group rotation={[0, -Math.PI / 2, 0]} ref={referens} position={position}>
      <mesh position={[0, 40, 0]} ref={ref}>
        <sphereGeometry args={[1200, 64, 32]} />
        <meshStandardMaterial
          roughness={0.3}
          emissiveIntensity={5}
          metalness={0.01}
          map={mainMap}
        />
      </mesh>
    </group>
  );
};

export default Moon;
