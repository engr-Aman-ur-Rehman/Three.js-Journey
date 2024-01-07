import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import {BallCollider, CuboidCollider, RigidBody, Physics } from '@react-three/rapier'

export default function Experience()
{
    return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />
        
        <Physics debug>

            <RigidBody colliders={ false }>
                <mesh castShadow position={ [ 0, 4, 0 ] }>
                    <sphereGeometry />
                    <meshStandardMaterial color="orange" />
                </mesh>
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

            <RigidBody colliders={ false } position={ [ 0, 1, - 0.25 ] } rotation={ [ Math.PI * 0.1, 0, 0 ] }>
            {/* <CuboidCollider args={ [ 1.5, 1.5, 0.5 ] }  />
            <CuboidCollider args={ [ 0.25, 1, 0.25 ] } position={ [ 0, 0, 1 ] } rotation={ [ - Math.PI * 0.35, 0, 0 ] } />  */}

            <BallCollider args={ [ 1.5 ] } />   
                <mesh castShadow>
                    <torusGeometry args={ [ 1, 0.5, 16, 32 ] } />
                    <meshStandardMaterial color="mediumpurple" />
                </mesh>
            </RigidBody>

            <RigidBody type='fixed'>
                <mesh receiveShadow position-y={ - 1.25 }>
                    <boxGeometry args={ [ 10, 0.5, 10 ] } />
                    <meshStandardMaterial color="greenyellow" />
                </mesh>
            </RigidBody>
        </Physics>

    </>
}