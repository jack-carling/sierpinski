const canvas = document.getElementById('canvas');
const start = document.getElementById('start');
const setPointA = document.getElementById('point-a');
const setPointB = document.getElementById('point-b');
const setPointC = document.getElementById('point-c');
const marker = document.getElementById('marker');
const setTracePoint = document.getElementById('trace-point');
const info = document.getElementById('info');
const ctx = canvas.getContext('2d');

let tracePoint = { x: 150, y: 150 };
let pointA = { x: 150, y: 10 };
let pointB = { x: 10, y: 290 };
let pointC = { x: 290, y: 290 };

let originalTracePoint = {};

let time;

let i = 0;
let running = false;

let settingPoint = '';

const points = [pointA, pointB, pointC];

function initDraw() {
  draw(pointA);
  draw(pointB);
  draw(pointC);
  draw(tracePoint);
}

initDraw();

function midpoint(x1, y1, x2, y2) {
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
  };
}

function draw(position) {
  ctx.fillRect(position.x, position.y, 1, 1);
}

start.addEventListener('click', () => {
  marker.classList.add('hide');
  settingPoint = '';
  if (i === 0) {
    originalTracePoint = { ...tracePoint };
  }
  if (i === 5000) {
    reset();
    return;
  }
  if (running) {
    pause();
    return;
  }
  time = setInterval(() => {
    i++;
    drawTriangle();
    info.innerHTML = `Iterations: ${i}`;
    if (i === 5000) {
      clearInterval(time);
      start.innerHTML = 'Reset';
    }
  }, 10);
  setPointA.classList.add('hide');
  setPointB.classList.add('hide');
  setPointC.classList.add('hide');
  setTracePoint.classList.add('hide');
  start.innerHTML = 'Pause';
  running = true;
});

function pause() {
  clearInterval(time);
  start.innerHTML = 'Start';
  running = false;
}

function reset() {
  clearInterval(time);
  tracePoint = { ...originalTracePoint };
  start.innerHTML = 'Start';
  setPointA.classList.remove('hide');
  setPointB.classList.remove('hide');
  setPointC.classList.remove('hide');
  setTracePoint.classList.remove('hide');
  running = false;
  i = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  initDraw();
  info.innerHTML = 'Iterations: 0';
}

function drawTriangle() {
  const random = Math.floor(Math.random() * 3);
  const newTracePoint = midpoint(tracePoint.x, tracePoint.y, points[random].x, points[random].y);
  draw(newTracePoint);
  tracePoint = { ...newTracePoint };
}

setPointA.addEventListener('click', () => {
  positionMarker(pointA);
  info.innerHTML = 'Click to place point A';
  settingPoint = 'A';
});

setPointB.addEventListener('click', () => {
  positionMarker(pointB);
  info.innerHTML = 'Click to place point B';
  settingPoint = 'B';
});

setPointC.addEventListener('click', () => {
  positionMarker(pointC);
  info.innerHTML = 'Click to place point C';
  settingPoint = 'C';
});

setTracePoint.addEventListener('click', () => {
  positionMarker(tracePoint);
  info.innerHTML = 'Click to place trace point';
  settingPoint = 'trace';
});

canvas.addEventListener('click', (e) => {
  if (!settingPoint) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (settingPoint === 'A') {
    pointA.x = e.layerX;
    pointA.y = e.layerY;
  } else if (settingPoint === 'B') {
    pointB.x = e.layerX;
    pointB.y = e.layerY;
  } else if (settingPoint === 'C') {
    pointC.x = e.layerX;
    pointC.y = e.layerY;
  } else if (settingPoint === 'trace') {
    tracePoint.x = e.layerX;
    tracePoint.y = e.layerY;
  }
  settingPoint = '';
  initDraw();
  info.innerHTML = 'Iterations: 0';
  marker.classList.add('hide');
});

function positionMarker(point) {
  marker.classList.remove('hide');
  marker.style.left = point.x - 10 + 'px';
  marker.style.top = point.y - 10 + 'px';
}
