
//
//  Animation
//
var view, gl;
var Main = {};
const RESOLUTION = window.devicePixelRatio;
function initialize() {
	view = document.getElementById('view');
	// gl = view.getContext("webgl2", {antialias: false, preserveDrawingBuffer: true, premultipliedAlpha: false })
	gl = view.getContext('webgl', {
		antialias: false,
		preserveDrawingBuffer: true,
		premultipliedAlpha: false,
	});

	window.addEventListener('resize', resize);
	window.addEventListener('scroll', scroll);

	Main.target = {};
	Main.target.view = {
		w: Math.ceil(view.getBoundingClientRect().width * RESOLUTION),
		h: Math.ceil(view.getBoundingClientRect().height * RESOLUTION),
		buffer: null,
	};

	view.width = Main.target.view.w;
	view.height = Main.target.view.h;

	Main.prog = {};

	Main.prog.render = new Program(SHADER_VERT, SHADER_FRAG, Main.target.view);

	resize();
	start();
}
var run = false;
function start() {
	run = true;
	requestAnimationFrame(frame);
}
function stop() {
	run = false;
}
var T = 0;
function frame() {
	T += 1 / 60;
	if (T > 310) {
		T -= 300;
	}

	Main.prog.render.prepareDraw();
	Main.prog.render.setUniform['u_T'](T + 0.5);
	Main.prog.render.draw();

	if (run) requestAnimationFrame(frame);
}
function resize() {
	Main.target.view.w = Math.ceil(
		view.getBoundingClientRect().width * RESOLUTION
	);
	Main.target.view.h = Math.ceil(
		view.getBoundingClientRect().height * RESOLUTION
	);

	view.width = Main.target.view.w;
	view.height = Main.target.view.h;

	Main.prog.render.setUniform['aspect'](
		Main.target.view.w / Main.target.view.h
	);
}
function scroll() {
	if (window.scrollY > window.innerHeight - 90) {
		if (run) stop();
	} else {
		if (!run) start();
	}
}

class Program {
	// Create a new program
	constructor(vertCode, fragCode, target) {
		gl.useProgram(null);

		this.program = gl.createProgram();
		this.target = target;

		// Compile shaders
		const vertShader = gl.createShader(gl.VERTEX_SHADER);
		gl.shaderSource(vertShader, vertCode);
		gl.compileShader(vertShader);
		const fragShader = gl.createShader(gl.FRAGMENT_SHADER);
		gl.shaderSource(fragShader, fragCode);
		gl.compileShader(fragShader);

		// Attach shaders
		gl.attachShader(this.program, vertShader);
		gl.attachShader(this.program, fragShader);
		gl.linkProgram(this.program);
		gl.useProgram(this.program);
		gl.clearColor(0, 0, 0, 1);

		// Upload render triangles
		const Verticies = new Float32Array([
			-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
		]);
		const vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, Verticies, gl.STATIC_DRAW);
		const positionAttribLocation = gl.getAttribLocation(
			this.program,
			'vertex'
		);
		gl.vertexAttribPointer(
			positionAttribLocation,
			2,
			gl.FLOAT,
			gl.FALSE,
			2 * Float32Array.BYTES_PER_ELEMENT,
			0
		);
		gl.enableVertexAttribArray(positionAttribLocation);

		// Generate uniform setters
		this.setUniform = {};
		this.uLocation = {};
		let uniformArgs = (vertCode + fragCode).matchAll(
			'uniform +(.+) +(.+);'
		);
		for (let i of uniformArgs) {
			let location = gl.getUniformLocation(this.program, i[2]);
			this.uLocation[i[2]] = location;
			let setFuncName = 'uniform';
			if (!['sampler2D'].includes(i[1])) {
				switch (i[1]) {
					case 'float':
						setFuncName += '1f';
						break;
					case 'vec2':
						setFuncName += '2fv';
						break;
					case 'vec3':
						setFuncName += '3fv';
						break;
					case 'vec4':
						setFuncName += '4fv';
						break;
					case 'int':
						setFuncName += '1i';
						break;
					default:
						alert('Undefined uniform type');
						break;
				}
				this.setUniform[i[2]] = value => {
					gl.useProgram(this.program);
					gl[setFuncName](location, value);
				};
			}
		}

		// Check errors
		gl.useProgram(this.program);
		if (gl.getError() !== 0) {
			// alert("Error creating progrAM (PST)")
		}

		gl.viewport(0, 0, this.target.w, this.target.h);
	}
	// Draw frame
	draw() {
		gl.drawArrays(gl.TRIANGLES, 0, 6);
	}
	use() {
		gl.useProgram(this.program);
	}
	prepareDraw() {
		gl.useProgram(this.program);
		gl.bindFramebuffer(gl.FRAMEBUFFER, this.target.buffer);
		gl.viewport(0, 0, this.target.w, this.target.h);
	}
	clear() {
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
}
const SHADER_VERT = `precision highp float;

attribute vec2 vertex;

varying vec2 UV;

uniform float aspect;

void main() {
    UV = vertex * vec2(aspect*0.5,0.5);
    gl_Position = vec4(vertex, 0.0, 1.0);
}`;
const SHADER_FRAG = `precision highp float;

// out vec4 fragColor;

varying vec2 UV;

uniform float u_T;

#define PI 3.14159265359

#define C1 vec3(.3, .84, .55)
#define C2 vec3(1., .84, 1.)
#define C3 vec3(.3, .51, .96)

float hash(float r, int seed) {
    return sin( 890.69 * dot( fract(vec2(r*853.31,float(seed)*9999.1)), fract(vec2(1117.7,973.01)) ));
}
float noise(float r, int seed) {
    float value = 0.;
    float w = 2./PI;
    
    float h1 = hash(floor(r/w+.5), seed);
    float h2 = hash(floor(r/w+1.+.5), seed);

    value = mix(h1, h2, r/w - floor(r/w+.5) );
    // value = mix(h1, h2, round(r/w+1.) - r/w + round(r/w) );
    // value = mix( h1, h2,  );

    return value;
}

void main() {    
    float T = u_T;
    vec3 c = vec3(0., 0., .14);
    vec2 p = UV;

    vec3 debug = vec3(0.);

    float r = length(p)*8. - T*.2;
    float a = atan(p.x / p.y);
    if (p.y < 0.) a += 3.1415926536;
    a *= 1.8;
    r += (2.+sin(T*.5+r*.5)) * 0.38 * hash(floor(0.5 + a+T*0.01), int(r));
    r *= .06;
    a += hash(floor(0.5 + a), int(r));
    float ri = floor(r);
    
    r += 0.7 * cos(smoothstep(0., 3., T)+1.6) + 0.5;

    float w = max(mod(r, 1.), max(mod(r+.333, 1.), mod(r+.666, 1.)) );
    w += 0.68 * smoothstep(.76, 1.2, w) * smoothstep(.999, 1., hash(a, int(ri)) );

    w = pow(w, 7.);    
    w *= 1.0 - smoothstep(.2, 0., length(p));
    w *= smoothstep(0., 3., T - length(p));
    
    a += ri * 1.5707963268;   

    
    float Tc = T * .2;
    c += C1 * smoothstep(0., 1.0, sin(a - Tc) ); 
    c += C2 * smoothstep(0., 1.0, sin(2.0943951024 + a - Tc) ); 
    c += C3 * smoothstep(0., 1.0, sin(4.1887902048 + a - Tc) );
    c.r += 0.12 * smoothstep(.8, .0, w);
    c.b += 0.12 * smoothstep(.6, .0, w);
    
    c = mix(vec3(0., 0., .14), c, w);    
    
    gl_FragColor = vec4(c, 1.0);
}`;

export { Program };
