import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls,Preload,useGLTF } from "@react-three/drei"
import { CanvasLoader } from "../Loader"


const Earth = () => {

  const earth = useGLTF('./planet/scene.gltf')

  return (
    <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0}/>
  )
}

const EarthCanvas = () =>{
  return(
    <Canvas
      shadows
      frameloop='demand'
      gl={{preserveDrawingBuffer:true}}
      camera={{ 
        fov:45,
        near:0.1,
        far:200,
        position:[-4,3,-5]
      }}

    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          minPolarAngle={Math.PI/2}
          maxPolarAngle={Math.PI/2}
        />

        <Earth/>
        </Suspense>
    </Canvas>
  )
}

export default EarthCanvas