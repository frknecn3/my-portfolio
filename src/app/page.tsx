'use client'
import React, { useEffect, useState } from 'react';
import { FaBook } from 'react-icons/fa';
import { FaComputer } from 'react-icons/fa6';
import { LuUniversity } from 'react-icons/lu';

type Project = {
  title: string;
  category: string;
  tech: string[];
  link: string;
  demo?: string;
};

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'about' | 'contact'>('work');

  const projects: Project[] = [
    {
      title: "BluE-Commerce",
      category: "Modern Fullstack E-Commerce Website",
      tech: ["Next.js", "PostgreSQL", "Prisma", "Redux Toolkit", "Stripe.js", "Neon", "TypeScript"],
      link: "https://github.com/frknecn3/blue-commerce",
      demo: 'https://blue-commerce-frknecn3.vercel.app'
    },
    {
      title: "GJN Algorithmic Scalping",
      category: "Semi-automatic Finance Bot & Helper",
      tech: ["JavaScript", "TypeScript", "Node.js", "Axios"],
      link: "https://github.com/frknecn3/gaijin-scalping"
    },
    {
      title: "SigmaChat",
      category: "NoSQL-based Personal/Group Chat Application",
      tech: ["React", "React Native", "Firebase", 'Cloudinary'],
      link: "https://github.com/frknecn3/sigmachat"
    }
  ];

  let currentTab;

  switch (activeTab) {
    case 'work':
      currentTab =
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className=" flex flex-col group relative  px-4 py-8 rounded-xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm hover:shadow shadow-blue-400"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-xl"></div>
              <span className="text-xs font-mono text-zinc-500 block mb-2">{project.category}</span>
              <a href={project.link}>
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-4">{project.title}</h3>
              </a>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="text-[10px] font-mono bg-zinc-900 px-2 py-1 rounded border border-zinc-800 text-zinc-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className='mt-auto inline-flex gap-2'>
                {
                  project.demo &&
                  <a target='_blank' className='inline-block px-2 py-1 rounded-sm bg-blue-800 text-white mt-4 hover:brightness-115 transition-all' href={project.demo}>
                    Live Demo
                  </a>
                }
                {
                  project.link !== '' &&
                  <a target='_blank' className=' border border-neutral-700 inline-block px-2 py-1 rounded-sm bg-neutral-900 text-white mt-4 hover:brightness-115 transition-all' href={project.link}>
                    GitHub
                  </a>
                }
              </div>
            </div>
          ))}
        </div >
      break;
    case 'about':
      currentTab =
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-400 leading-relaxed max-w-5xl">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white font-mono">// Pipeline & Execution</h3>
            <p>
              I approach software development from a double-sided engineering perspective. My work bridges the analytical requirements of heavy backend systems with structural linguistic clarity. Whether designing high-throughput relational database logic, parsing intricate technical frameworks, or calculating execution parameters for low-latency strategy engines, I prioritize absolute predictability and dry optimization.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/40 font-mono text-xs space-y-4">
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Primary Tech Stack</div>
            <div>
              <span className="text-white block font-semibold mb-1">Languages & Core:</span>
              TypeScript, JavaScript, C#, HTML5/CSS3
            </div>
            <div>
              <span className="text-white block font-semibold mb-1">Frameworks & Ecosystem:</span>
              Next.js, Node.js, Express, Redux Toolkit, React, Vite
            </div>
            <div>
              <span className="text-white block font-semibold mb-1">Data Storage & Layer:</span>
              PostgreSQL, MongoDB, Prisma ORM
            </div>
          </div>
        </div>
      break;
    case 'contact':
      currentTab =
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-zinc-400 leading-relaxed max-w-5xl">
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-lg font-semibold text-white font-mono">// Pipeline & Execution</h3>
            <p>
              I approach software development from a double-sided engineering perspective. My work bridges the analytical requirements of heavy backend systems with structural linguistic clarity. Whether designing high-throughput relational database logic, parsing intricate technical frameworks, or calculating execution parameters for low-latency strategy engines, I prioritize absolute predictability and dry optimization.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-zinc-900/20 border border-zinc-800/40 font-mono text-xs space-y-4">
            <div className="text-zinc-500 uppercase tracking-wider text-[10px]">Primary Tech Stack</div>
            <div>
              <span className="text-white block font-semibold mb-1">Languages & Core:</span>
              TypeScript, JavaScript, SQL, HTML5/CSS3
            </div>
            <div>
              <span className="text-white block font-semibold mb-1">Frameworks & Ecosystem:</span>
              Next.js, Node.js, Express, Redux Toolkit, React, Vite
            </div>
            <div>
              <span className="text-white block font-semibold mb-1">Data Storage & Layer:</span>
              PostgreSQL, MongoDB, Prisma ORM, Firebase
            </div>
          </div>
        </div>
      break;
  }

  return (
    <div className="min-h-screen bg-[#090A0F] text-[#F3F4F6] selection:bg-[#3B82F6] selection:text-white font-sans antialiased">

      <div className="fixed inset-0 pointer-events-none opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] z-50"></div>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24">
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">Available for frontend / backend / mobile / fullstack development</span>
          </div>

          <div className='mb-4'>
            <h1 className="text-3xl md:text-[45px] font-bold tracking-tight text-white mb-2">
              For systems that are
              <span className='from-cyan-100 to-cyan-400 text-transparent bg-linear-to-r bg-clip-text'> concise</span>,
              <span className='text-transparent bg-linear-to-r bg-clip-text from-amber-200 to-amber-400'> reliable</span> and
              <span className='from-pink-100 to-pink-400 text-transparent bg-linear-to-r bg-clip-text'> beautiful.</span>

            </h1>
            <p className='text-2xl md:text-3xl font-bold tracking-widest'>
              FURKAN ERCAN
            </p>
          </div>

          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed font-normal">
            Software engineer who focuses on scalable full-stack architectures.
          </p>
        </section>

        {/* Navigation / Filter Bar */}
        <div className="flex border-b border-zinc-800/80 mb-12">
          <button
            onClick={() => setActiveTab('work')}
            className={`pb-4 px-2 font-mono text-xs uppercase tracking-wider transition-all duration-200 border-b-2 -mb-[2px] ${activeTab === 'work' ? 'border-blue-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
          >
            Selected Production
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-4 px-6 font-mono text-xs uppercase tracking-wider transition-all duration-200 border-b-2 -mb-[2px] ${activeTab === 'about' ? 'border-blue-500 text-white' : 'border-transparent text-zinc-500 hover:text-zinc-300'
              }`}
          >
            Core Architecture
          </button>
        </div>

        {/* Dynamic Content Grid */}
        <div className='min-h-80'>
          {currentTab}
        </div>


        <hr className='my-20' />

        <section className='flex max-md:flex-col-reverse gap-10'>
          <div className='flex-3 pr-5'>
            <h2 className='code text-4xl font-bold tracking-widest mb-10 max-md:text-center'>ABOUT ME</h2>
            <p className='font-light text-xl code-alt'>
              <span className='code font-semibold'>EVER SINCE</span> I've started my journey of coding with the Expression 2 chips of the videogame Garry's Mod, my interest and love for coding has never faded away, instead it gets bigger each day.
              <br /><br />
              The first <span className='text-transparent bg-linear-to-r bg-clip-text from-blue-200 to-blue-400 font-bold'>"Eureka"</span> moment I had when I turned on my first LightComponent with a press on my keyboard, I reshaped it towards Frontend development, then Backend, then Mobile and so on. With each component I build, I remember the passion I gained on that first day.
              <br /><br />
              Having graduated from both the departments of <span className='text-transparent bg-linear-to-r bg-clip-text from-amber-200 to-amber-400'>English Translation & Interpretation</span> and <span className='text-transparent bg-linear-to-r bg-clip-text from-green-200 to-green-600'>Computer Programming</span> of Marmara University, I can confidently say that I approach coding very differently compared to other people. <br /><br /> I view it as a translation from human language to computer language, in the way that is the most suitable for the purpose of your translation (The Skopos). I know the times when you need to elaborate, when you need to shrink it down, when you need to show off and when you need to be humble with your output, depending on the requirements of your Skopos.

              <br /><br />
              Today, I apply this translation methodology to full-stack web applications writing precise, performant code that accurately fulfills the project's Skopos.
            </p>
          </div>
          <div className='flex-2 flex flex-col bg-purple-800/15 shadow-purple-400 shadow bg-blend-darken py-10 rounded-xl'>
            <div className='flex justify-center'>
              <img src={'https://avatars.githubusercontent.com/u/108365449?v=4'} className='rounded-full border-3 w-[20vw] max-w-[200px] ' alt="" />
            </div>
            <div className='flex flex-col pt-10 gap-8'>
              <div className='flex justify-center'>
                <p className=' text-2xl md:text-4xl'>FURKAN ERCAN</p>
              </div>
              <div className='ml-[20%] flex flex-col gap-8'>
                <div className='flex items-center gap-2'>
                  <LuUniversity /> <span className='pt-0.75'>Marmara University</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FaBook /> English Translation and Interpretation
                </div>
                <div className='flex items-center gap-2'>
                  <FaComputer /> Computer Programming
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;