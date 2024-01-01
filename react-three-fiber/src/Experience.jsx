import {Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

    return <>
        <Environment preset="city" />
        
        <color args={ [ '#241a1a' ] } attach="background" />

        <OrbitControls makeDefault />
        
        {/* <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}

        <primitive object={ computer.scene } />

    </>
}