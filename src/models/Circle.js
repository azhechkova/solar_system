import * as THREE from "three";

class Circle extends THREE.Mesh {
  constructor(radius, material) {
    const sphere = new THREE.SphereGeometry(
      radius,
      50,
      50,
      0,
      Math.PI * 2,
      0,
      Math.PI * 2
    );

    super(sphere, material);
  }
}

export default Circle;
