function renderShadow(gl, time) {
    const program = webglUtils.createProgramFromSources(gl, [vs4, fs4]);
    const vertexIdLoc = gl.getAttribLocation(program, 'vertexId');
    const numVertsLoc = gl.getUniformLocation(program, 'numVerts');
    const resolutionLoc = gl.getUniformLocation(program, 'resolution');
    
    
    const numVerts = 36 * 3;
    const vertexIds = new Float32Array(numVerts);
    vertexIds.forEach((v, i) => {
      vertexIds[i] = i;
    });
    
    const idBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertexIds, gl.STATIC_DRAW);
    
    // draw
    
      time *= 0.001;  // convert to seconds
    
      webglUtils.resizeCanvasToDisplaySize(gl.canvas);
      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    
      gl.useProgram(program);
    
      {
        // Turn on the attribute
        gl.enableVertexAttribArray(vertexIdLoc);
    
        // Bind the id buffer.
        gl.bindBuffer(gl.ARRAY_BUFFER, idBuffer);
    
        // Tell the attribute how to get data out of idBuffer (ARRAY_BUFFER)
        const size = 1;          // 1 components per iteration
        const type = gl.FLOAT;   // the data is 32bit floats
        const normalize = false; // don't normalize the data
        const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
        const offset = 0;        // start at the beginning of the buffer
        gl.vertexAttribPointer(
            vertexIdLoc, size, type, normalize, stride, offset);
      }
    
      // tell the shader the number of verts
      gl.uniform1f(numVertsLoc, numVerts);
      // tell the shader the resolution
      gl.uniform2f(resolutionLoc, gl.canvas.width, gl.canvas.height);
    
      const offset = 0;
      gl.drawArrays(gl.TRIANGLES, offset, numVerts);
    }