import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import {GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader' 
const asset = new URL('./assets/asset.glb',import.meta.url)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement)
camera.position.set(-7, 7, -7)
controls.update()


// Plane
const planeGeometry = new THREE.PlaneGeometry(10, 10)
const planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)
plane.rotation.x = -0.5 * Math.PI

renderer.setClearColor("#e8cd00")

const light = new THREE.DirectionalLight(0xFFFFFF);
scene.add(light)
light.position.set(0,10,0)

const light2 = new THREE.DirectionalLight(0xffffff,5)
light2.position.set(0,1,5)
scene.add(light2)

const loader = new GLTFLoader()

const ambientLight = new THREE.AmbientLight(0xff0839)
scene.add(ambientLight)
ambientLight.position.set(0,10,0)

// lambo
loader.load(asset.href,gltf=>{
    const model = gltf.scene
    model.position.set(2.1,1.21,0)
    scene.add(model)
},undefined,e=>{
    console.error(e);
})

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})

function animate(){
    renderer.render(scene, camera)
}

renderer.setAnimationLoop(animate)

document.body.appendChild(renderer.domElement)