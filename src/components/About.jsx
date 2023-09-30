import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from './hoc'

const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right","spring",0.5*index,0.75)}
      >
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div options={{max:45,scale:1,speed:450}}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
          >
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-[17px] max-w-3xl leading-[30px]'>
        I'm a Front-end Developer with experience in TypeScript, JavaScript and in the framework of React. I'm a quick learner and also a rapid improver. I aim for the cleanest and most optimized code. I'm a person of teamwork and can collaborate with everyone.<br></br> Have been in various projects in which I've partaken in creating UIs,<br></br> SPAs, web applications, bringing web page designs to life and many more. Eager to work with you !
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service,index)=>(
            <ServiceCard key={service.title} title={service.title} index={index} {...service}/>
            ))}

      </div>
    </>
  )
}

export default SectionWrapper(About,"about")