import "./style.css";
import * as THREE from "three";

const canvas = document.getElementById("webgl");
const scene = new THREE.Scene();

const group = new THREE.Group();

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#000" })
);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#000" })
);
cube2.position.x = -2;

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "#000" })
);
cube3.position.x = 2;

group.add(cube1);
group.add(cube2);
group.add(cube3);

scene.add(group);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.set(0, 0, 3);

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);

function animate() {
  requestAnimationFrame(animate);
  group.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
