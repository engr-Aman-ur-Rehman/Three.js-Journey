import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Experience()
{

    const cube = useRef()
    const twister = useRef()

    const cubeJump = () =>
    {
        const mass = cube.current.mass()
        cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 })
        cube.current.applyTorqueImpulse({ x: Math.random() - 0.5, y: Math.random() - 0.5, z: Math.random() - 0.5 })    }

        useFrame((state) =>
    {
        const time = state.clock.getElapsedTime()

        const eulerRotation = new THREE.Euler(0, time*3, 0)
        const quaternionRotation = new THREE.Quaternion()
        quaternionRotation.setFromEuler(eulerRotation)
        twister.current.setNextKinematicRotation(quaternionRotation)
    
        const angle = time * 0.5
        const x = Math.cos(angle)
        const z = Math.sin(angle)
        twister.current.setNextKinematicTranslation({ x: x, y: - 0.8, z: z })
    })

    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
        
        <Physics debug gravity={ [ 0, - 9.81, 0 ] }>

        <RigidBody colliders="ball" position={ [ - 1.5, 2, 0 ] } gravityScale={ 0.2 }>
            <mesh castShadow>
                <sphereGeometry />
                <meshStandardMaterial color="orange" />
            </mesh>
        </RigidBody>

        <RigidBody 
        ref={ cube } 
        position={ [ 1.5, 2, 0 ] }
        restitution={ 0.5 }
        friction={ 0.7 }
        colliders={ false }>
            <mesh castShadow onClick={ cubeJump }>
                <boxGeometry />
                <meshStandardMaterial color="mediumpurple" />
            </mesh>
            <CuboidCollider mass={ 2 } args={ [ 0.5, 0.5, 0.5 ] } />
        </RigidBody>

            {/* <RigidBody>
                <mesh castShadow position={ [ 2, 2, 0 ] }>
                    <boxGeometry args={ [ 3, 2, 1 ] } />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
                <mesh castShadow position={ [ 2, 2, 3 ] }>
                    <boxGeometry args={ [ 1, 1, 1 ] } />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody> */}

            {/* <RigidBody colliders={ false } position={ [ 0, 1, - 0.25 ] } rotation={ [ Math.PI * 0.1, 0, 0 ] }>
            <CuboidCollider args={ [ 1.5, 1.5, 0.5 ] }  />
            <CuboidCollider args={ [ 0.25, 1, 0.25 ] } position={ [ 0, 0, 1 ] } rotation={ [ - Math.PI * 0.35, 0, 0 ] } /> 

            <BallCollider args={ [ 1.5 ] } />   
                <mesh castShadow>
                    <torusGeometry args={ [ 1, 0.5, 16, 32 ] } />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody> */}

            <RigidBody
                    ref={ twister }
                    position={ [ 0, - 0.8, 0 ] }
                    friction={ 0 }
                    type="kinematicPosition"
                >
                    <mesh castShadow scale={ [ 0.4, 0.4, 3 ] }>
                        <boxGeometry />
                        <meshStandardMaterial color="red" />
                    </mesh>
                </RigidBody>

            <RigidBody type='fixed' friction={ 0.7 }>
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}