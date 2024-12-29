import { createNoise3D } from "simplex-noise";

interface Canvas {
  a: HTMLCanvasElement;
  b: HTMLCanvasElement;
}

interface Context {
  a: CanvasRenderingContext2D;
  b: CanvasRenderingContext2D;
}

interface CircleProps {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  ttl: number;
  radius: number;
  hue: number;
}

const CONSTANTS = {
  circleCount: 150,
  circlePropCount: 8,
  baseSpeed: 0.1,
  rangeSpeed: 1,
  baseTTL: 150,
  rangeTTL: 200,
  baseRadius: 100,
  rangeRadius: 200,
  rangeHue: 60,
  xOff: 0.0015,
  yOff: 0.0015,
  zOff: 0.0015,
  backgroundColor: "hsla(0,0%,5%,1)",
} as const;

const { PI, cos, sin, abs, sqrt, pow, random, atan2 } = Math;
const HALF_PI = 0.5 * PI;
const TAU = 2 * PI;
const rand = (n: number) => n * random();
const randIn = (min: number, max: number) => rand(max - min) + min;
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return abs(((t + hm) % m) - hm) / hm;
};

let canvas: Canvas;
let ctx: Context;
let circleProps: Float32Array;
let noise3D: ReturnType<typeof createNoise3D>;
let baseHue: number;

function initCanvas() {
  const container = document.querySelector("#heroCanvas");
  if (!container) {
    console.error("Canvas container not found");
    return;
  }

  canvas = {
    a: document.createElement("canvas"),
    b: document.createElement("canvas"),
  };

  // Add styles to both canvases
  [canvas.a, canvas.b].forEach((canvasElement) => {
    canvasElement.style.position = "absolute";
    canvasElement.style.top = "0";
    canvasElement.style.left = "0";
    canvasElement.style.width = "100%";
    canvasElement.style.height = "100vh";
  });

  // Append both canvases to the container
  container.appendChild(canvas.a);
  container.appendChild(canvas.b);

  const ctxA = canvas.a.getContext("2d");
  const ctxB = canvas.b.getContext("2d");

  if (!ctxA || !ctxB) {
    console.error("Could not get canvas contexts");
    return;
  }

  ctx = {
    a: ctxA,
    b: ctxB,
  };
}

function resize() {
  const { innerWidth, innerHeight } = window;

  canvas.a.width = innerWidth;
  canvas.a.height = innerHeight;

  ctx.a.drawImage(canvas.b, 0, 0);

  canvas.b.width = innerWidth;
  canvas.b.height = innerHeight;

  ctx.b.drawImage(canvas.a, 0, 0);
}

function initCircles() {
  circleProps = new Float32Array(
    CONSTANTS.circleCount * CONSTANTS.circlePropCount
  );
  noise3D = createNoise3D();
  baseHue = 220;

  for (
    let i = 0;
    i < CONSTANTS.circleCount * CONSTANTS.circlePropCount;
    i += CONSTANTS.circlePropCount
  ) {
    initCircle(i);
  }
}

function initCircle(i: number) {
  const x = rand(canvas.a.width);
  const y = rand(canvas.a.height);
  const n = noise3D(
    x * CONSTANTS.xOff,
    y * CONSTANTS.yOff,
    baseHue * CONSTANTS.zOff
  );
  const t = rand(TAU);
  const speed = CONSTANTS.baseSpeed + rand(CONSTANTS.rangeSpeed);
  const vx = speed * cos(t);
  const vy = speed * sin(t);
  const life = 0;
  const ttl = CONSTANTS.baseTTL + rand(CONSTANTS.rangeTTL);
  const radius = CONSTANTS.baseRadius + rand(CONSTANTS.rangeRadius);
  const hue = baseHue + n * CONSTANTS.rangeHue;

  circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
}

function updateCircles() {
  baseHue++;

  for (let i = 0; i < circleProps.length; i += CONSTANTS.circlePropCount) {
    updateCircle(i);
  }
}

function updateCircle(i: number) {
  const i2 = 1 + i;
  const i3 = 2 + i;
  const i4 = 3 + i;
  const i5 = 4 + i;
  const i6 = 5 + i;
  const i7 = 6 + i;
  const i8 = 7 + i;

  const x = circleProps[i];
  const y = circleProps[i2];
  const vx = circleProps[i3];
  const vy = circleProps[i4];
  const life = circleProps[i5];
  const ttl = circleProps[i6];
  const radius = circleProps[i7];
  const hue = circleProps[i8];

  drawCircle(x, y, life, ttl, radius, hue);

  circleProps[i] = x + vx;
  circleProps[i2] = y + vy;
  circleProps[i5] = life + 1;

  (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
}

function drawCircle(
  x: number,
  y: number,
  life: number,
  ttl: number,
  radius: number,
  hue: number
) {
  ctx.a.save();
  ctx.a.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
  ctx.a.beginPath();
  ctx.a.arc(x, y, radius, 0, TAU);
  ctx.a.fill();
  ctx.a.closePath();
  ctx.a.restore();
}

function checkBounds(x: number, y: number, radius: number) {
  return (
    x < -radius ||
    x > canvas.a.width + radius ||
    y < -radius ||
    y > canvas.a.height + radius
  );
}

function render() {
  ctx.b.save();
  ctx.b.filter = "blur(50px)";
  ctx.b.drawImage(canvas.a, 0, 0);
  ctx.b.restore();
}

function draw() {
  ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
  ctx.b.fillStyle = CONSTANTS.backgroundColor;
  ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
  updateCircles();
  render();
  window.requestAnimationFrame(draw);
}

export function initAnimation() {
  initCanvas();
  if (!canvas || !ctx) {
    console.error("Canvas initialization failed");
    return;
  }
  resize();
  initCircles();
  draw();
  window.addEventListener("resize", resize);
}
