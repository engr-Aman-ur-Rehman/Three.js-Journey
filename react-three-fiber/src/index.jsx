import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import Experience from './Experience.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const cameraSettings = {
    fov: 45,
    // zoom: 100,
    near: 0.1,
    far: 200,
    position: [ 3, 2, 6 ]
}

root.render(
    <Canvas
        // flat
        // dpr={ [ 1, 2 ] }
        gl={ {
            antialias: true,
            toneMapping: THREE.CineonToneMapping,
            // outputColorSpace: THREE.LinearSRGBColorSpace
        } }
        // orthographic
        camera={ cameraSettings }
    >
        <Experience />
    </Canvas>
)