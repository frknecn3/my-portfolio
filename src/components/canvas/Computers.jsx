import {Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, useGLTF} from '@react-three/drei'
import {CanvasLoader} from '../Loader'



const Computers = ({isMobile,light}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  console.log(light)
  return (
    <mesh>
      <hemisphereLight intensity={light.light ? 2.1 : 0} groundColor='black'/>
      <pointLight intensity={light.light ? 3 : 0}/>
      <primitive 
      scale={isMobile ? 0.4  : 0.75}
      object={computer.scene}
      position={isMobile ? [0,-2.5,-0.5]:[0,-3,-1.5]}
      rotation={[-0.01,-0.2,-0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas=(light)=>{

  const [isMobile,setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 760px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) =>{
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change',handleMediaQueryChange)

    return () =>{mediaQuery.removeEventListener('change',handleMediaQueryChange)}
  }, [])
  


  return(
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position:[20,3,0],fov:25}}
    gl={{preserveDrawingBuffer:true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers light={light} isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas