const vs1 = `
attribute float vertexIdSun;
uniform float numVertsSun;
uniform vec2 resolution;
uniform float x;
uniform float y;
uniform float size;

#define PI radians(180.0)

void main() {
  float positionABSx = x;
  float positionABSy = y;
  float numSlices = 36.0;
  float sliceId = floor(vertexIdSun / 3.0);
  float trivertexIdSun = mod(vertexIdSun, 3.0);
  float edge = trivertexIdSun + sliceId;
  float angleU = edge / numSlices;  // 0.0 to 1.0
  float angle = angleU * PI * 2.0;
  float radius = step(trivertexIdSun, 1.5);
  vec2 pos = vec2(cos(angle), sin(angle)) * radius * size;

  float aspect = resolution.y / resolution.x;
  vec2 scale = vec2(aspect, 1);
  float size = 0.5;

  gl_Position = vec4((pos * scale * size) + vec2(positionABSx, + positionABSy), 0, 1);
}
`;

const fs1 = `
precision mediump float;

void main() {
  gl_FragColor = vec4(1, 0.33, 0.0, 1);
}
`;

const vs2 = `
attribute float vertexId;
uniform float numVerts;
uniform vec2 resolution;
uniform float x;
uniform float y;
uniform float size;

#define PI radians(180.0)

void main() {
  float positionABSx = x;
  float positionABSy = y;
  float numSlices = 36.0;
  float sliceId = floor(vertexId / 3.0);
  float trivertexId = mod(vertexId, 3.0);
  float edge = trivertexId + sliceId;
  float angleU = edge / numSlices;  // 0.0 to 1.0
  float angle = angleU * PI * 2.0;
  float radius = step(trivertexId, 1.5);
  vec2 pos = vec2(cos(angle), sin(angle)) * radius * size;

  float aspect = resolution.y / resolution.x;
  vec2 scale = vec2(aspect, 1);
  float size = 0.17;

  gl_Position = vec4((pos * scale * size) + vec2(positionABSx, + positionABSy), 0, 1);
}
`;

const fs2 = `
precision mediump float;

void main() {
  gl_FragColor = vec4(1, 1, 0.61, 1);
}
`;

const vs3 = `
attribute float vertexId;
uniform float numVerts;
uniform vec2 resolution;
uniform float x;
uniform float y;

#define PI radians(180.0)

void main() {
  float positionABSx = x;
  float positionABSy = y;
  float numSlices = 36.0;
  float sliceId = floor(vertexId / 3.0);
  float trivertexId = mod(vertexId, 3.0);
  float edge = trivertexId + sliceId;
  float angleU = edge / numSlices;  // 0.0 to 1.0
  float angle = angleU * PI * 2.0;
  float radius = step(trivertexId, 1.5);
  vec2 pos = vec2(cos(angle), sin(angle)) * radius * 0.3;

  float aspect = resolution.y / resolution.x;
  vec2 scale = vec2(aspect, 1);
  float size = 0.31;

  gl_Position = vec4((pos * scale * size) + vec2(positionABSx, + positionABSy), 0, 1);
}
`;

const fs3 = `
precision mediump float;

void main() {
  gl_FragColor = vec4(0.19,  0.32, 0.6, 1);
}
`;