import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import fullScreen from "./scripts/fullScreen";
import onWindowResize from "./scripts/resize";
import createPlanet from "./scripts/createPlanet";

import SunTexture from "../static/images/sun.jpg";
import EarthTexture from "../static/images/earth.jpg";
import MercuryTexture from "../static/images/mercury.jpg";
import VenusTexture from "../static/images/venus.jpg";
import MarsTexture from "../static/images/mars.jpg";
import JupiterTexture from "../static/images/jupiter.jpg";
import SaturnTexture from "../static/images/saturn.jpg";
import BG from "../static/images/bg.jpg";

import "./style.css";

let camera, controls, scene, renderer;

let earth, mercury, venus, mars, jupiter, saturn, sun;

function init() {
  scene = new THREE.Scene();
  const loader = new THREE.TextureLoader();
  const bgTexture = loader.load(BG);
  scene.background = bgTexture;

  sun = createPlanet(109 / 10, SunTexture);
  sun.position.set(0, 0, 0);
  scene.add(sun);

  mercury = createPlanet(0.38 / 10, MercuryTexture, 25);
  scene.add(mercury);

  venus = createPlanet(0.95 / 10, VenusTexture, 260 / 10);
  scene.add(venus);

  earth = createPlanet(1 / 10, EarthTexture, 280 / 10);
  scene.add(earth);

  mars = createPlanet(0.53 / 10, MarsTexture, 290 / 10);
  scene.add(mars);

  jupiter = createPlanet(11.19 / 10, JupiterTexture, 340 / 10);
  scene.add(jupiter);

  saturn = createPlanet(9.4 / 10, SaturnTexture, 390 / 10);
  scene.add(saturn);

  const canvas = document.getElementById("webgl");

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight
  );
  camera.position.z = 40;

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener("resize", () => onWindowResize(camera, renderer));

  window.addEventListener("dblclick", () => fullScreen(canvas));
}

const EARTH_YEAR = 2 * Math.PI * (1 / 60) * (1 / 60);

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  sun.rotation.y += 0.001;

  mercury.position.x += EARTH_YEAR * 4;
  mercury.rotation.y += EARTH_YEAR * 4;

  earth.position.x += EARTH_YEAR;
  earth.rotation.y += EARTH_YEAR;

  venus.position.x -= EARTH_YEAR * 2;
  venus.rotation.y += EARTH_YEAR * 2;

  mars.position.x += EARTH_YEAR * 0.5;
  mars.rotation.y += EARTH_YEAR * 0.5;

  jupiter.position.x += EARTH_YEAR * 0.4;
  jupiter.rotation.y += EARTH_YEAR * 0.4;

  saturn.position.x += EARTH_YEAR * 0.5;
  saturn.rotation.y += EARTH_YEAR * 0.5;

  render();
}

function render() {
  renderer.render(scene, camera);
}

init();
animate();
