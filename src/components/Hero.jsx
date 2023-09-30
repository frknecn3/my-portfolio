import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'
import { useState,useEffect } from 'react'


const Hero = () => {
  
const [light,setLight] = useState(false)


  return [(
    <section className='relative flex w-full h-screen mx-auto' style={{"marginTop":"30px","display":"flex","flexDirection":"column","gap":"30px"}}>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7x1 mx-auto py-[px] flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Furkan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}><br className='block sm:hidden'/> 
          </p>
        </div>
        </div>
        
        <ComputersCanvas light={light} />
        

        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-around items-center'> 
        <div></div>
          <a href="#about">
            <div className='w-[20px] h-[44px] rounded-3xl border-[3px] border-secondary flex justify-center items-start p-2'>
              
              <motion.div
                animate={{
                  y:[0,18,0]
                }}
                transition={{duration:1.5,repeat:Infinity,repeatType:"loop"}}

                className=""


              ><div className='w-2 h-2 rounded-full bg-secondary mb-1'></div></motion.div>
            </div>
          </a>
          <div className='border-[2px] p-[3px] rounded-full'>
            <button onClick={()=>{setLight(!light);}}>LIGHT</button>
          </div>
        </div>
        

    </section>
  )]
}

export {Hero}