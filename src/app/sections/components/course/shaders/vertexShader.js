const vertexShader = `
uniform float u_time;


// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// varying float vZ;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);

  modelPosition.y += sin(modelPosition.x * 5.0 + u_time * 3.0) * 0.9;
  modelPosition.y += sin(modelPosition.z * 6.0 + u_time * 2.0) * 0.9;

  // vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}

`;

export default vertexShader;

// const vertexShader = `
// precision highp float;
// precision highp int;

// uniform mat4 modelMatrix;
// uniform mat4 modelViewMatrix;
// uniform mat4 projectionMatrix;
// uniform mat4 viewMatrix;
// uniform mat3 normalMatrix;

// // uniform vec3 cameraPosition;
// // uniform float time;

// // attribute vec3 position;
// // attribute vec3 normal;
// // attribute vec2 uv;
// // attribute vec2 uv2;

// // varying vec3 vPosition;
// // varying vec3 vNormal;
// // varying vec2 vUv;
// // varying vec2 vUv2;

// void main() {
//     // vNormal = normal;
//     // vUv = uv;
//     // vUv2 = uv2;
//     // vPosition = position;

//     gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

// }

// `;

// export default vertexShader;
