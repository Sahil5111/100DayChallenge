import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// assets 
import SunImage from './assets/sun.jpg'
import StarTexture from './assets/stars.jpg'
import EarthTexture from './assets/earth.jpg'
import jupiterTexture from './assets/jupiter.jpg'
import marsTesture from './assets/mars.jpg'
import mercuryTexture from './assets/mercury.jpg'
import neptuneTexture from './assets/neptune.jpg'
import plutoTexture from './assets/pluto.jpg'
import saturnRingTexture from './assets/saturn ring.png'
import uranusTexture from './assets/uranus.jpg'
import uranusRingTexture from './assets/uranus ring.png'
import venusTexture from './assets/venus.jpg'




const Renderer = new THREE.WebGLRenderer()
Renderer.setSize(window.innerWidth, window.innerHeight)


const scene = new THREE.Scene()

const Camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
const controls = new OrbitControls(Camera, Renderer.domElement)

//Camera and lightings
Camera.position.set(5, 5, 5)
controls.update()


const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

//Texture loaders
const cubeTextureloader = new THREE.CubeTextureLoader()
const textureLoader = new THREE.TextureLoader()


scene.background=cubeTextureloader.load(
   [ StarTexture,
    StarTexture,
    StarTexture,
    StarTexture,
    StarTexture,
    StarTexture]
)


// Helpers
const AxisHelper = new THREE.AxesHelper(3)
scene.add(AxisHelper)





//Objects
const sungeometry = new THREE.SphereGeometry(1)
const sunmesh = new THREE.MeshBasicMaterial({
    map: textureLoader.load(SunImage)
})
const sun = new THREE.Mesh(sungeometry, sunmesh)
scene.add(sun)





function animate() {
    Renderer.render(scene, Camera)
}

Renderer.setAnimationLoop(animate)






window.addEventListener('resize', () => {
    Camera.aspect = window.innerWidth / window.innerHeight
    Camera.updateProjectionMatrix()
    Renderer.setSize(window.innerWidth, window.innerHeight)
})

document.body.appendChild(Renderer.domElement)