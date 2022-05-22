function renderSun(gl, time, x, y, size) {
const program = webglUtils.createProgramFromSources(gl, [vs1, fs1]);
const vertexIdSunLoc = gl.getAttribLocation(program, 'vertexIdSun');
const numVertsSunLoc = gl.getUniformLocation(program, 'numVertsSun');
const resolutionLoc = gl.getUniformLocation(program, 'resolution');
const xLoc = gl.getUniformLocation(program, 'x');
const yLoc = gl.getUniformLocation(program, 'y');
const sizeLoc = gl.getUniformLocation(program, 'size');

const numVertsSun = 36 * 3;
const vertexIdSuns = new Float32Array(numVertsSun);
vertexIdSuns.forEach((v, i) => {
  vertexIdSuns[i] = i;
});

const idBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
gl.bufferData(gl.ARRAY_BUFFER, vertexIdSuns, gl.STATIC_DRAW);

// draw

  time *= 0.001;  // convert to seconds

  webglUtils.resizeCanvasToDisplaySize(gl.canvas);
  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.useProgram(program);

  {
    // Turn on the attribute
    gl.enableVertexAttribArray(vertexIdSunLoc);

    // Bind the id buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);

    // Tell the attribute how to get data out of idBuffer (ARRAY_BUFFER)
    const size = 1;          // 1 components per iteration
    const type = gl.FLOAT;   // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    const offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(
        vertexIdSunLoc, size, type, normalize, stride, offset);
  }

  // tell the shader the number of verts
  gl.uniform1f(numVertsSunLoc, numVertsSun);
  // tell the shader the resolution
  gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);
  gl.uniform1f(xLoc, x);
  gl.uniform1f(yLoc, y);
  gl.uniform1f(sizeLoc, size);


  const offset = 0;
  gl.drawArrays(gl.TRIANGLES, offset, numVertsSun);
}