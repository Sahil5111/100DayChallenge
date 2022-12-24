import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import * as dat from 'dat.gui'

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled=true
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement)

// // central axis
// const axesHelper = new THREE.AxesHelper(3)
// scene.add(axesHelper)

camera.position.set(-7, 7, 7)
controls.update()


// BOX
const boxGeometry = new THREE.BoxGeometry(3, 3, 3)
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 })

const box = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(box)
box.position.set(-3, 3, 0)
box.castShadow=true

// Plane
const planeGeometry = new THREE.PlaneGeometry(10, 10)
const planeMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide
})
const plane = new THREE.Mesh(planeGeometry, planeMaterial)
scene.add(plane)
plane.rotation.x = -0.5 * Math.PI
plane.receiveShadow=true

// sphere
const SphereGeometry = new THREE.SphereGeometry(1)
const sphereMaterial = new THREE.MeshStandardMaterial(
    {
        color:"#F1C58D",
        // wireframe:true
    }
)
const sphere = new THREE.Mesh(SphereGeometry, sphereMaterial)
scene.add(sphere)
sphere.position.set(1, 4, 1)
sphere.castShadow=true

// GUI Control Bar
const gui = new dat.GUI()

// options for gui control bar 
const options = {
    boxcolor: "#00ff00",
    speed: 0.01,
    xrotation: 0.01,
    yrotation: 0.01,
}

// adding options to gui
gui.add(options, "xrotation", 0, 0.2)

gui.add(options, "yrotation", 0, 0.2)

gui.add(options, "speed", 0.01, 0.1)

gui.addColor(options, "boxcolor").onChange(e => {
    box.material.color.set(e)
}
)

let step = 0

function animate() {
    box.rotation.x += options.xrotation
    box.rotation.y += options.yrotation

    step += options.speed
    sphere.position.y = 4 * Math.abs(Math.sin(step)) + 1

    renderer.render(scene, camera)
}

renderer.setClearColor("#e8cd00")

renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const light = new THREE.DirectionalLight(0xFFFFFF);
// const helper = new THREE.DirectionalLightHelper(light, 2)
// const dLightShadowHelper = new THREE.CameraHelper(light.shadow.camera)
// scene.add(dLightShadowHelper)
scene.add(light)
// scene.add(helper);
light.position.set(-7, 12, 7)
light.castShadow=true

const light2 = new THREE.DirectionalLight(0xffee00,0.5)
light2.position.set(7,12,-7)
light2.target=box
light2.castShadow=true
scene.add(light2)


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
})