import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Create a scene
const scene = new THREE.Scene();

// Create a cube
const cube = new THREE.BoxGeometry(1, 1, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({
  color: "grey",
  wireframe: true,
});
const cubeMesh = new THREE.Mesh(cube, cubeMaterial);
cubeMesh.position.set(0, 1, 0);
const cubeMesh2 = new THREE.Mesh(cube, cubeMaterial);
cubeMesh2.position.set(2, 0, 0);

scene.add(cubeMesh);
scene.add(cubeMesh2);

// cubeMesh.rotation.reorder("YXZ");
// cubeMesh.rotation.y = THREE.MathUtils.degToRad(90);
// cubeMesh.rotation.x = THREE.MathUtils.degToRad(45);

const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

// Create a Perspective Camera
const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(10, 4, 10);

// Create an Orthographic Camera
// const aspectRatio = window.innerWidth / window.innerHeight;
// const camera = new THREE.OrthographicCamera(
//   -1 * aspectRatio,
//   1 * aspectRatio,
//   1,
//   -1,
//   0.1,
//   200
// );

// Inizilize the renderer
const canvas = document.querySelector("canvas.threejs");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add orbit controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
// controls.autoRotate = true;

// Resize the renderer when the window is resized
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Initialize a clock
const clock = new THREE.Clock();
let previousTime = 0;

// Animate the cube
const animate = () => {
  const currentTime = clock.getElapsedTime();
  const delta = currentTime - previousTime;

  previousTime = currentTime;

  cubeMesh.rotation.y += THREE.MathUtils.degToRad(1) * delta * 10;
  cubeMesh2.rotation.x += THREE.MathUtils.degToRad(1) * delta * 10;
  cubeMesh2.position.y = Math.sin(currentTime) * 0.5;

  cubeMesh.scale.x = Math.sin(currentTime) * 0.5 + 2;

  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
