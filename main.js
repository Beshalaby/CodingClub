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
const camera = new THREE.PerspectiveCamera(58, window.innerWidth/window.innerHeight, 0.1, 1000)

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
//scene.add(gridHelper);


function get_random (list) {
  return list[Math.floor((Math.random()*list.length))];
}

const cubeGeo = new THREE.BoxGeometry(5,5,5,10,10,10);
var cubeMat = new THREE.MeshStandardMaterial({color: get_random([0x4242BE, 0x0066DB, 0x0081DF, 0x0096CE, 0x00A7B1, 0x00B68F])});



var i = -40;

while (i<50) {
  
  const cube1 = new THREE.Mesh(cubeGeo, cubeMat);
  cube1.position.set(i,22,0);
  scene.add(cube1);
  var cubeMat = new THREE.MeshStandardMaterial({color: get_random([0x4242BE, 0x0066DB, 0x0081DF, 0x0096CE, 0x00A7B1, 0x00B68F])});
  const cube2 = new THREE.Mesh(cubeGeo, cubeMat);
  cube2.position.set(i,12,0);
  scene.add(cube2);
  var cubeMat = new THREE.MeshStandardMaterial({color: get_random([0x4242BE, 0x0066DB, 0x0081DF, 0x0096CE, 0x00A7B1, 0x00B68F])});
  const cube3 = new THREE.Mesh(cubeGeo, cubeMat);
  cube3.position.set(i,2,0);
  scene.add(cube3);
  var cubeMat = new THREE.MeshStandardMaterial({color: get_random([0x4242BE, 0x0066DB, 0x0081DF, 0x0096CE, 0x00A7B1, 0x00B68F])});
  const cube4 = new THREE.Mesh(cubeGeo, cubeMat);
  cube4.position.set(i,-8,0);
  scene.add(cube4);
  var cubeMat = new THREE.MeshStandardMaterial({color: get_random([0x4242BE, 0x0066DB, 0x0081DF, 0x0096CE, 0x00A7B1, 0x00B68F])});
  const cube5 = new THREE.Mesh(cubeGeo, cubeMat);
  cube5.position.set(i,-18,0);
  scene.add(cube5);
  // const cube6 = new THREE.Mesh(cubeGeo, cubeMat);
  // cube6.position.set(i,0,0);
  // scene.add(cube6);
  i += 10;
}



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