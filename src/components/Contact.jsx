import { useState,useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import {styles} from '../style'
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "./hoc"
import { slideIn } from "../utils/motion"

// template_yanqag2 service_b4nihjm 0Ism5curtXVLTWCns

const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState(
    {
      name:'',
      email:'',
      message:'',
    }
  )
    const [loading,setLoading] = useState(false)
    const handleChange = (e) =>{
      const {name,value} = e.target

      setForm({...form,name:value,})

    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        setLoading(true)

        emailjs.send("service_b4nihjm","template_yjxiqje",{
          from_name: form.name,
          to_name: "Furkan",
          from_email:form.email,
          to_email:"furkanduhannuman@gmail.com",
          message:form.message,
        },
        "0Ism5curtXVLTWCns"
        )
        .then(()=>{
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible.")
          setForm({
            name:'',
            email:'',
            message:'',
          })
        },(error)=>{
          setLoading(false)
          console.log(error)
          alert("Something went wrong.")
        })

    }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      
        <motion.div variants={slideIn('left','tween',0.2,1)} className="flex-[0.75] bg-black-100 w-[500px] p-8 rounded-2xl">
          <div className="w-[200px]">
            <p className={styles.sectionSubText}>Get in Touch</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>

            <form action="" ref={formRef} onSubmit={handleSubmit} className='w-[400px] mt-12 flex flex-col gap-4'>
              <label htmlFor="" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input type="text" name="name" defaultValue={form.name} onChange={handleChange} 
                placeholder="What's your name ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
              </label>
              <label htmlFor="" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your E-mail</span>
                <input type="email" name="email" defaultValue={form.email} onChange={handleChange} 
                placeholder="What's your email address ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
              </label>
              <label htmlFor="" className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Message</span>
                <textarea rows='7' type="text" name="message" defaultValue={form.message} onChange={handleChange} 
                placeholder="What would you like to say ?" className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium" />
              </label>
              <div className="flex justify-center">
              <button type='submit' className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">
                {loading?'Sending':'Send'}
              </button>
              </div>
            </form>
          </div>
        </motion.div>


        <motion.div variants={slideIn('right','tween',0.2,1)} className="xl:flex-1 xl:h-auto w-auto md:h-[550px] h-[350px]">
            <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")