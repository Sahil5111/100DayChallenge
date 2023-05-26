import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'


import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as dat from 'dat.gui'


// assets 
import SunImage from './assets/sun.jpg'
import StarTexture from './assets/stars.jpg'
import earthTexture from './assets/earth.jpg'
import jupiterTexture from './assets/jupiter.jpg'
import marsTexture from './assets/mars.jpg'
import mercuryTexture from './assets/mercury.jpg'
import neptuneTexture from './assets/neptune.jpg'
import plutoTexture from './assets/pluto.jpg'
import saturnTexture from './assets/saturn.jpg'
import saturnRingTexture from './assets/saturn ring.png'
import uranusTexture from './assets/uranus.jpg'
import uranusRingTexture from './assets/uranus ring.png'
import venusTexture from './assets/venus.jpg'




ReactDOM.createRoot(document.getElementById('react')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)





const Renderer = new THREE.WebGLRenderer()
Renderer.setSize(window.innerWidth, window.innerHeight)


const scene = new THREE.Scene()

const Camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
const controls = new OrbitControls(Camera, Renderer.domElement)

//Camera and lightings
Camera.position.set(128,128,0)
controls.update()


const ambientLight = new THREE.AmbientLight(0x333333)
scene.add(ambientLight)

const pointLight = new THREE.PointLight(0x545454,3)
scene.add(pointLight)

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


// // Helpers
// const AxisHelper = new THREE.AxesHelper(64)
// scene.add(AxisHelper)





//Objects
const sungeometry = new THREE.SphereGeometry(16)
const sunmesh = new THREE.MeshBasicMaterial({
    map: textureLoader.load(SunImage)
})
const sun = new THREE.Mesh(sungeometry, sunmesh)
scene.add(sun)


function createPlanet(radius,distance,texture,angle,ring,r1,r2,rangle) {
    const PlanetGeometry = new THREE.SphereGeometry(radius)
    const PlanetMesh=new THREE.MeshStandardMaterial({
        map:textureLoader.load(texture)
    })
    const planet = new THREE.Mesh(PlanetGeometry,PlanetMesh)
    planet.position.set(-1*distance,0,0)
    const object=new THREE.Object3D()
    if(angle){
        object.rotateZ(angle*Math.PI/180)
    }
    if(ring){
        const RingGeometry = new THREE.RingGeometry(r1,r2)
        const RingMesh= new THREE.MeshStandardMaterial({
            map:textureLoader.load(ring),
            side:THREE.DoubleSide
        })
        const Ring = new THREE.Mesh(RingGeometry,RingMesh)
        Ring.rotateX((1/2-rangle/180)*Math.PI)
        planet.add(Ring)
    }
    scene.add(object)
    object.add(planet)
    return {object,planet}
}

const mercury = createPlanet(3.2,28,mercuryTexture,6.3)
const venus = createPlanet(5.8,44,venusTexture,2.2)
const earth = createPlanet(6,62,earthTexture,1.6)
const mars = createPlanet(4,78,marsTexture,1.7)
const jupiter = createPlanet(12,100,jupiterTexture,0.3)
const saturn = createPlanet(10,138,saturnTexture,0.9,saturnRingTexture,10,20,27)
const uranus = createPlanet(7,176,uranusTexture,1,uranusRingTexture,7,12)
const neptune = createPlanet(7,200,neptuneTexture,0.7)
const pluto = createPlanet(2.8,216,plutoTexture)







// GUI
const gui = new dat.GUI()

const control = {
    time : 1,
    "toogle time":true,
}

gui.add(control,'time',-5,5)
gui.add(control,'toogle time').onChange(e=>{
    if(!e){
        control.time=0
    }
    else{
        control.time=1
    }
})



function animate() {
    Renderer.render(scene, Camera)
    mercury.object.rotateY(0.04*control.time)
    mercury.planet.rotateY(0.004* control.time)
    venus.object.rotateY(0.015*control.time)
    venus.planet.rotateY(0.002* control.time)
    earth.object.rotateY(0.01*control.time)
    earth.planet.rotateY(0.02* control.time)
    mars.object.rotateY(0.008*control.time)
    mars.planet.rotateY(0.018* control.time)
    jupiter.object.rotateY(0.002*control.time)
    jupiter.planet.rotateY(0.04* control.time)
    saturn.object.rotateY(0.0009*control.time)
    saturn.planet.rotateY(0.038* control.time)
    uranus.object.rotateY(0.0004*control.time)
    uranus.planet.rotateY(0.03* control.time)
    neptune.object.rotateY(0.0001*control.time)
    neptune.planet.rotateY(0.032* control.time)
    pluto.object.rotateY(0.00007*control.time)
    pluto.planet.rotateY(0.008* control.time)
}

Renderer.setAnimationLoop(animate)






window.addEventListener('resize', () => {
    Camera.aspect = window.innerWidth / window.innerHeight
    Camera.updateProjectionMatrix()
    Renderer.setSize(window.innerWidth, window.innerHeight)
})

document.querySelector("#root").append(Renderer.domElement)