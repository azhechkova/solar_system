const scene = new THREE.Scene();

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "#1a3a4c" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  width: 800,
  height: 600,
};

const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 1;

scene.add(camera);

const canvas = document.getElementById("webgl");
const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
});

renderer.setSize(sizes.width, sizes.height);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
