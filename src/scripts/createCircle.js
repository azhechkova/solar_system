import * as THREE from "three";

function createCircle(radius) {
  const circle = new THREE.SphereGeometry(
    radius,
    50,
    50,
    0,
    Math.PI * 2,
    0,
    Math.PI * 2
  );

  return circle;
}

export default createCircle;
