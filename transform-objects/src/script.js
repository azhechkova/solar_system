import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import "./style.css";

let camera, controls, scene, renderer, group;

const clock = new THREE.Clock();

function init() {
  scene = new THREE.Scene();
  group = new THREE.Group();

  const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#00f" })
  );

  const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#ff0" })
  );
  cube2.position.x = -2;

  const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: "#f00" })
  );
  cube3.position.x = 2;

  group.add(cube1);
  group.add(cube2);
  group.add(cube3);
  scene.add(group);

  const canvas = document.getElementById("webgl");

  renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);

  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight
  );
  camera.position.set(0, 0, 3);

  controls = new OrbitControls(camera, renderer.domElement);

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();

  // // adapt to the framerate
  const elapsedTime = clock.getElapsedTime();

  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = Date.now();

  group.rotation.y = Math.sin(elapsedTime);

  render();
}

function render() {
  renderer.render(scene, camera);
}

init();
animate();
