import * as THREE from "three";
import Circle from "./Circle";
import { EARTH_YEAR } from "../constants";
import { gsap } from "gsap";

class Planet extends Circle {
  constructor({ radius, texture, zIndex, animation }) {
    const loader = new THREE.TextureLoader();
    const material = new THREE.MeshBasicMaterial({
      map: loader.load(texture),
    });

    super(radius, material);

    this.zIndex = zIndex;
    this.animation = animation;
    const xPosition = Math.random() * 2 * Math.PI * 10;
    this.position.set(xPosition, 1, this.zIndex);
  }

  create(scene) {
    scene.add(this);
  }

  animate() {
    this.position.x += EARTH_YEAR * this.animation;
    this.rotation.y += EARTH_YEAR * this.animation;
  }

  onClick(camera) {
    var aabb = new THREE.Box3().setFromObject(this);
    var center = aabb.getCenter(new THREE.Vector3());
    var size = aabb.getSize(new THREE.Vector3());

    gsap.to(camera.position, {
      duration: 1,
      x: center.x,
      y: center.y,
      z: center.z + size.z / 2,
      onUpdate: function () {
        camera.lookAt(center);
      },
    });
  }
}

export default Planet;
