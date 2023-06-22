import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import fullScreen from "./helpers/fullScreen";
import onWindowResize from "./helpers/resize";
import Planet from "./models/Planet";
import { PLANETS } from "./constants";

import BG from "../static/images/bg.jpg";

import "./style.css";

class SolarSystem {
  constructor() {
    this.init = this.init.bind(this);
    this.animate = this.animate.bind(this);
    this.createPlanets = this.createPlanets.bind(this);
    this.start = this.start.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onClick = this.onClick.bind(this);

    this.canvas = document.getElementById("webgl");
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight
    );
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2();
  }

  createPlanets() {
    const planets = PLANETS.map((item) => {
      const newPlanet = new Planet(item);
      newPlanet.create(this.scene);
      return newPlanet;
    });

    this.planets = planets;
  }

  init() {
    const loader = new THREE.TextureLoader();

    const bgTexture = loader.load(BG);

    this.scene.background = bgTexture;

    this.createPlanets();

    this.camera.position.z = 40;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.renderer.render(this.scene, this.camera);

    window.addEventListener("resize", () =>
      onWindowResize(this.camera, this.renderer)
    );

    window.addEventListener("dblclick", () => fullScreen(this.canvas));
    window.addEventListener("pointermove", this.onMouseMove);
    window.addEventListener("click", this.onClick);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.controls.update();

    this.planets.forEach((item) => item.animate());

    this.renderer.render(this.scene, this.camera);
  }

  onMouseMove(e) {
    this.pointer.set(
      (e.clientX / window.innerWidth) * 2 - 1,
      -(e.clientY / window.innerHeight) * 2 + 1
    );
    this.raycaster.setFromCamera(this.pointer, this.camera);
    this.intersects = this.raycaster.intersectObjects(
      this.scene.children,
      true
    );
  }

  onClick() {
    if (this.intersects[0]) {
      this.intersects[0]?.object?.onClick &&
        this.intersects[0]?.object?.onClick(this.camera);
    }
  }

  start() {
    this.init();
    this.animate();
  }
}

const solarSystem = new SolarSystem();
solarSystem.start();
