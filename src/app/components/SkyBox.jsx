import { TextureLoader } from "three";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GradientTexture } from "@react-three/drei";

const SkyBox = ({ color, skyBoxRef, skyBoxMatRef }) => {
  return (
    <mesh ref={skyBoxRef} position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
      <sphereGeometry args={[2900, 64, 32]} />
      {/* <boxGeometry args={[1200, 1200, 1200]} /> */}
      {/* <meshStandardMaterial
        // map={skyTexture}
        // emissiveMap={skyTexture}
        side={THREE.DoubleSide}
        // emissiveIntensity={0.7}
        color={"black"}
        emissive={1.7}
        // opacity={0.1}
        // transparent
        // color={"green"}
        // flatShading
      /> */}
      <meshPhysicalMaterial
        ref={skyBoxMatRef}
        // color={"#0b1a25"}
        color={color}
        // color={"#060e14"}
        // color={"#052d4c"}
        // color={"rgb(0, 0, 1)"}
        // color={"#898989"}
        side={THREE.BackSide}
        // side={THREE.FrontSide}
        // map={skyTexture3}
        emissiveIntensity={0}
        // flatShading
        // emissiveMap={skyTexture4}
        // alphaMap={skyTexture}
        emissive={"green"}
        roughness={0.2}
        metalness={0.2}
        // transmission={0.8}
        // reflectivity={0.1}
        // thickness={0.9}
      />
    </mesh>
  );
};

export default SkyBox;
