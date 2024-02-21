import * as THREE from "three";
import {
  OrbitControls,
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
// import glsl from "babel-plugin-glsl/macro";
// import glsl from "glslify";
import { useRef, useMemo } from "react";
import { MathUtils } from "three";
// import Iso as THREE.Iso
import Course from "./course/Course";

const TestShadersScene = () => {
  const ref = useRef();
  // useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80",
  ]);
  return (
    <>
      <spotLight position={[0, 200, 0]} intensity={10} />
      {/* <directionalLight position={[0, 100, -400]} intensity={10} /> */}
      <Course />
    </>
  );
};

export default TestShadersScene;

const SphereShaderMaterial = {
  uniforms: {
    u_time: { type: "f", value: 0 },
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float u_time;

    void main() {
      vec2 uv = vUv;
      float cb = floor((uv.x + u_time)*20.) + floor((uv.y + u_time)*20.);
      gl_FragColor = vec4(1.,0.,0.,mod(cb, 2.0));
    }
  `,
};
// const SphereShaderMaterial = {
//   uniforms: {
//     u_time: { type: "f", value: 0 },
//   },
//   vertexShader: `
//     precision mediump float;
//     varying vec2 vUv;
//     void main() {
//         vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
//         gl_Position = projectionMatrix * mvPosition;
//         vUv = uv;
//     }
//   `,
//   fragmentShader: `
//     varying vec2 vUv;
//     uniform float u_time;

//     void main() {
//       vec2 uv = vUv;
//       float cb = floor((uv.x + u_time)*20.) + floor((uv.y + u_time)*20.);
//       gl_FragColor = vec4(1.,0.,0.,mod(cb, 2.0));
//     }
//   `,
// };

const ShaderSphere = (props) => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    // sphereRef.current.material.uniforms.u_time.value = clock.oldTime * 0.00005;
  });

  return (
    <mesh ref={sphereRef} {...props}>
      <sphereGeometry args={[20, 24, 24]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};

const Blob = () => {
  const mesh = useRef();
  const vertexShader = `
  uniform float u_intensity;
  uniform float u_time;
  
  varying vec2 vUv;
  varying float vDisplacement;
  
  // Classic Perlin 3D Noise 
  // by Stefan Gustavson
  //
  vec4 permute(vec4 x) {
      return mod(((x*34.0)+1.0)*x, 289.0);
  }
  
  vec4 taylorInvSqrt(vec4 r) {
      return 1.79284291400159 - 0.85373472095314 * r;
  }
  
  vec3 fade(vec3 t) {
      return t*t*t*(t*(t*6.0-15.0)+10.0);
  }
  
  float cnoise(vec3 P) {
      vec3 Pi0 = floor(P); // Integer part for indexing
      vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
      Pi0 = mod(Pi0, 289.0);
      Pi1 = mod(Pi1, 289.0);
      vec3 Pf0 = fract(P); // Fractional part for interpolation
      vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
      vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
      vec4 iy = vec4(Pi0.yy, Pi1.yy);
      vec4 iz0 = Pi0.zzzz;
      vec4 iz1 = Pi1.zzzz;
  
      vec4 ixy = permute(permute(ix) + iy);
      vec4 ixy0 = permute(ixy + iz0);
      vec4 ixy1 = permute(ixy + iz1);
  
      vec4 gx0 = ixy0 / 7.0;
      vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
      gx0 = fract(gx0);
      vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
      vec4 sz0 = step(gz0, vec4(0.0));
      gx0 -= sz0 * (step(0.0, gx0) - 0.5);
      gy0 -= sz0 * (step(0.0, gy0) - 0.5);
  
      vec4 gx1 = ixy1 / 7.0;
      vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
      gx1 = fract(gx1);
      vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
      vec4 sz1 = step(gz1, vec4(0.0));
      gx1 -= sz1 * (step(0.0, gx1) - 0.5);
      gy1 -= sz1 * (step(0.0, gy1) - 0.5);
  
      vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
      vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
      vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
      vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
      vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
      vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
      vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
      vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
  
      vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
      g000 *= norm0.x;
      g010 *= norm0.y;
      g100 *= norm0.z;
      g110 *= norm0.w;
      vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
      g001 *= norm1.x;
      g011 *= norm1.y;
      g101 *= norm1.z;
      g111 *= norm1.w;
  
      float n000 = dot(g000, Pf0);
      float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
      float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
      float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
      float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
      float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
      float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
      float n111 = dot(g111, Pf1);
  
      vec3 fade_xyz = fade(Pf0);
      vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
      vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
      float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
      return 2.2 * n_xyz;
  }
  
  // End of Perlin Noise Code
  
  
  void main() {
      vUv = uv;
  
      vDisplacement = cnoise(position + vec3(2.0 * u_time));
  
      vec3 newPosition = position + normal * (u_intensity * vDisplacement);
  
      vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
      vec4 viewPosition = viewMatrix * modelPosition;
      vec4 projectedPosition = projectionMatrix * viewPosition;
  
      gl_Position = projectedPosition;
  
}
`;
  const fragmentShader = `
uniform float u_intensity;
uniform float u_time;

varying vec2 vUv;
varying float vDisplacement;

void main() {
    float distort = 2.0 * vDisplacement * u_intensity * sin(vUv.y * 10.0 + u_time);
// this defines our gradient
    vec3 color = vec3(abs(vUv - 0.5) * 2.0  * (1.0 - distort), 1.0);
    gl_FragColor = vec4(color, 1.0);
}

`;

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        1.15,
        1.02
      );
    }
  });

  return (
    <mesh ref={mesh} scale={1.5} position={[0, 0, 0]}>
      {/* <icosahedronBufferGeometry args={[2, 20]} /> */}
      {/* <sphereGeometry args={[20, 24, 24]} /> */}
      <icosahedronGeometry args={[20, 4]} />

      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const Mirror = () => {
  const mirrorRef = useRef();

  const uniforms = useMemo(
    () => ({
      color: {
        value: null,
      },

      tDiffuse: {
        value: null,
      },

      textureMatrix: {
        value: null,
      },
    }),
    []
  );

  const vertexShader = `
      uniform mat4 textureMatrix;
      varying vec4 vUv;
  
      #include <common>
      #include <logdepthbuf_pars_vertex>
  
      void main() {
  
        vUv = textureMatrix * vec4( position, 1.0 );
  
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
        #include <logdepthbuf_vertex>
  
      }`;

  const fragmentShader = `
      uniform vec3 color;
      uniform sampler2D tDiffuse;
      varying vec4 vUv;
  
      #include <logdepthbuf_pars_fragment>
  
      float blendOverlay( float base, float blend ) {
  
        return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );
  
      }
  
      vec3 blendOverlay( vec3 base, vec3 blend ) {
  
        return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );
  
      }
  
      void main() {
  
        #include <logdepthbuf_fragment>
  
        vec4 base = texture2DProj( tDiffuse, vUv );
        gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );
  
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
  
      }`;

  return (
    <mesh
      ref={mirrorRef}
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={1.5}
    >
      <planeGeometry args={[100, 100, 16, 16]} />
      {/* <boxGeometry args={[50, 50, 50]} /> */}
      {/* <sphereGeometry args={[30, 1024, 512]} /> */}
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        side={THREE.DoubleSide}
        // wireframe={false}
        // wireframe
      />

      {/* <meshStandardMaterial /> */}
    </mesh>
  );
};
