import "./style.css"
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GUI } from "dat.gui";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

// scene is container that holds objects, cameras and lights
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x24252A);
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

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);


const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
const gridHelper = new THREE.GridHelper(200, 50);
scene.add(gridHelper);





// const whiteSky = new THREE.TextureLoader().load ("white.jpg");
// scene.background = whiteSky;



function animate () {
  //tells the browers you want to preform an animation
  requestAnimationFrame(animate);
  controls.update();


  //preforms the animation
  renderer.render(scene, camera);
}



animate();