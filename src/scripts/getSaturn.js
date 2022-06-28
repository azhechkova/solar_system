import * as THREE from "three";
import SaturnTexture from "../../static/images/saturn.jpg";
import RingTexture from "../../static/images/saturn-circle.png";

import createPlanet from "./createPlanet";

function getSaturn() {
  const saturnGroup = new THREE.Group();
  const saturn = createPlanet(9.4 / 10, SaturnTexture, 50);

  const geometry = new THREE.RingGeometry(1.25, 2, 64);
  const material = new THREE.MeshBasicMaterial({
    map: RingTexture,
    // side: THREE.DoubleSide,
  });
  const circle = new THREE.Mesh(geometry, material);
  circle.position.set(1, 1, 50);
  saturnGroup.add(saturn);
  saturnGroup.add(circle);

  return saturnGroup;
}

export default getSaturn;
