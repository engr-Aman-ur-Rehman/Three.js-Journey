export default function Experience()
{
    return <>
    <mesh rotation-y={ Math.PI * 0.25 } position-x={ 2} scale={ 1.5 }>
    <sphereGeometry args={ [ 1.5, 32, 32 ] } />
    <meshBasicMaterial color="mediumpurple" wireframe={ false } />
    </mesh>
    </>
}