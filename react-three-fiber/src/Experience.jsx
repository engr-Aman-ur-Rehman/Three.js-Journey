import {PresentationControls, Float, Environment, useGLTF, OrbitControls } from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://threejs-journey.com/resources/models/macbook_model.gltf')

    return <>
        <Environment preset="city" />
        
        <color args={ [ '#241a1a' ] } attach="background" />

        {/* <OrbitControls makeDefault /> */}
        
        {/* <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh> */}


        <PresentationControls 
        global
        rotation={ [ 0.13, 0.1, 0 ] }
        polar={ [ - 0.4, 0.2 ] }
        azimuth={ [ - 1, 0.75 ] }
        config={ { mass: 2, tension: 400 } }
        snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >
                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                />
            </Float>
        </PresentationControls>

    </>
}