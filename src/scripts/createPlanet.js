import * as THREE from "three";
import createCircle from "./createCircle";

const createPlanet = (radius, texture, zIndex = 0) => {
  const loader = new THREE.TextureLoader();

  const planetGeometry = createCircle(radius);
  const planetMaterial = new THREE.MeshBasicMaterial({
    map: loader.load(texture),
  });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);

  const xPosition = Math.random() * 2 * Math.PI * 10;

  planet.position.set(xPosition, 1, zIndex);

  return planet;
};

export default createPlanet;
