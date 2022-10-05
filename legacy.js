import './style.css'

import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
//always need scene, camera and renderer

// scene is container that holds objects, cameras and lights
const scene = new THREE.Scene();

//perspective camera mimics eyeball
//(fov, aspect ratio, view frustum) 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

//tell renderer what element to render in
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

//set pixel ratio to screen pixel ratio
renderer.setPixelRatio(window.devicePixelRatio);
//make it a fullscreen canvas
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);
renderer.render(scene, camera);

//all shapes are made out of a geometry,and a material combined to make a mesh
const geometry = new THREE.CapsuleGeometry(8, 20, 20, 20);
const material = new THREE.MeshStandardMaterial({color:0xff6347});
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

//to add light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

//tells where light is
const lightHelper = new THREE.PointLightHelper(pointLight);
//creates a 2 dimentional grid
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper);

//importing orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

function addStar () {
  const starGeo = new THREE.SphereGeometry (0.25, 24, 24);
  const starMat = new THREE.MeshStandardMaterial(0xffffff);
  const star = new THREE.Mesh(starGeo,starMat);
  const [x, y, z] = Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(400).fill().forEach(addStar);

//animation loop so we dont have to call renderer.render() every time
function animate () {
  //tells the browers you want to preform an animation
  requestAnimationFrame(animate);

  mesh.rotation.x += 0.008;
  mesh.rotation.y += 0.008;
  mesh.rotation.z += 0.008;

  //updates orbit controls
  controls.update();

  //preforms the animation
  renderer.render(scene, camera);
}

animate();


// function spawnTriangles () {
//   const triGeo = new THREE.TetrahedronGeometry(1, 0);
//   const triColor = THREE.MathUtils.randInt(0,0xffffff);
//   const triMat = new THREE.MeshStandardMaterial({color:triColor});
//   const triangle = new THREE.Mesh(triGeo, triMat);


//   const [x,y] = Array(2).fill().map(()=>THREE.MathUtils.randFloatSpread(35));
//   triangle.position.set(x,y,0);

//   scene.add(triangle);
// }

// Array(50).fill().forEach(spawnTriangles);