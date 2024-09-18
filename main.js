import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const palo = new THREE.BoxGeometry(1, 6, 1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red" });
const paloMesh = new THREE.Mesh(palo, cubeMaterial);
paloMesh.position.set(-5, 0, 0);

const cubo = new THREE.BoxGeometry(3, 1, 1);
const cuboMesh = new THREE.Mesh(cubo, cubeMaterial);
cuboMesh.position.set(-3, 2.5, 0);

const cuboMesh2 = new THREE.Mesh(cubo, cubeMaterial);
cuboMesh2.position.set(-3, 0, 0);

const cuboMesh3 = new THREE.Mesh(cubo, cubeMaterial);
cuboMesh3.position.set(-3, -2.5, 0);

scene.add(paloMesh);
scene.add(cuboMesh);
scene.add(cuboMesh2);
scene.add(cuboMesh3);

const paloMesh2 = new THREE.Mesh(palo, cubeMaterial);
paloMesh2.position.set(0, 0, 0);
scene.add(paloMesh2);
const paloMesh3 = new THREE.Mesh(palo, cubeMaterial);
paloMesh3.position.set(4, 0, 0);
scene.add(paloMesh3);

const largo = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), cubeMaterial);
largo.position.set(1, 1.5, 0);
largo.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 4.9);
scene.add(largo);

const largo2 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), cubeMaterial);
largo2.position.set(3, 1.5, 0);
largo2.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / -4.9);
scene.add(largo2);

const paloMesh4 = new THREE.Mesh(palo, cubeMaterial);
paloMesh4.position.set(6, 0, 0);
scene.add(paloMesh4);

const largo3 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), cubeMaterial);
largo3.position.set(7, -1.5, 0);
largo3.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / 5);
scene.add(largo3);

const largo4 = new THREE.Mesh(new THREE.BoxGeometry(1, 3, 1), cubeMaterial);
largo4.position.set(7, 1.5, 0);
largo4.rotateOnAxis(new THREE.Vector3(0, 0, 1), Math.PI / -4.9);
scene.add(largo4);



const camera = new THREE.PerspectiveCamera(
  30,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.z = 27;

const canvas = document.querySelector("canvas.threejs");

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.autoRotate = true;

const animate = () => {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
};

animate();
