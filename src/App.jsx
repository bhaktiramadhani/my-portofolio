import profile from './assets/images/profile.jpg';
import marker from './assets/images/marker.svg';
import cv from './assets/CV-Bhakti-Ramadhani.pdf'
import github from './assets/images/github.svg';
import nextjs from './assets/images/next-js.svg'
import laravel from './assets/images/laravel.svg'
import instagram from './assets/images/instagram.svg'
import silantar from './assets/images/silantar.png'
import chemaraya from './assets/images/chemaraya.png'
import { useState } from 'react';
import Typewriter from 'typewriter-effect';

const skills = [
  { name: 'HTML', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: 'CSS', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: 'Javascript', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: 'Tailwind CSS', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: 'Bootstrap', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: 'React JS', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: 'Next JS', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: 'PHP', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: 'MySQL', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: 'Git', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: 'VS Code', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

function App() {
  const [open, setOpen] = useState(false);
  console.log(cv);

  return (
    <div className="flex flex-col font-poppins">
      <header className="w-full flex items-center justify-between px-10 lg:justify-between lg:px-16 max-w-7xl mx-auto my-4 py-3">
        <button onClick={() => setOpen(!open)} class={`${open ? 'fixed' : 'static'} md:hidden z-20`}>
          <div class="w-10 h-10 relative">
            <svg
              class={`w-10 h-10 ${open ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class={`w-10 h-10 ${open ? "block" : "hidden"}`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
        <nav className="relative">
          <ul className={`${open ? 'fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 bg-white' : 'hidden'} gap-8 font-medium text-2xl md:flex`}>
            <li className="my-3" onClick={() => setTimeout(() => setOpen(false), 200)}>
              <a href="#home" className="relative transition-all duration-500 ease-in-out hover:text-[rgb(85,85,85)] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all">Home</a>
            </li>
            <li className="my-3" onClick={() => setTimeout(() => setOpen(false), 200)}>
              <a href="#projects" className="relative transition-all duration-500 ease-in-out hover:text-[#555555] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all">Projects</a>
            </li>
            <li className="my-3" onClick={() => setTimeout(() => setOpen(false), 200)}>
              <a href="#skills" className="relative transition-all duration-500 ease-in-out hover:text-[#555555] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all">Skills</a>
            </li>
            <li className="my-3" onClick={() => setTimeout(() => setOpen(false), 200)}>
            </li>
          </ul>
        </nav>
        <a href='https://github.com/bhaktiramadhani' target='_blank'>
          <img src={github} alt="github Icon" width={42} height={42} />
        </a>
      </header>
      <main className="w-full py-20 flex flex-col mx-auto px-10 lg:px-16 max-w-7xl">
        <section id="home" className='flex justify-center gap-20 flex-wrap lg:flex-nowrap mx-auto'>
          <div>
            <div className="rounded-full w-72 h-72 md:w-96 md:h-96 overflow-hidden">
              <img src={profile} alt="aa" className="overflow-hidden object-cover w-full h-full object-top" />
            </div>
          </div>
          <div className='flex flex-col justify-center items-center text-center'>
            <h2 className='font-semibold text-base'>Haloo, Saya</h2>
            <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl mt-4'>
              Bhakti Ramadhani
            </h1>
            <h2 className='font-bold text-xl md:text-2xl text-[#555555] mt-2'>
              <Typewriter options={
                {
                  strings: ["Front-end Developer", "Back-end Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 500,
                  delay: 40,
                }
              } />
            </h2>
            <div className='flex items-center mt-2 text-[#444444]'>
              <img src={marker} alt="Icon marker" width="24" height="24" className='inline mr-2' />
              <span className='font-medium text-xs md:text-base'>Banjarmasin, Kalimantan Selatan, Indonesia</span>
            </div>
            <div className='my-8'>
              <p>Saya adalah seorang mahasiswa yang punya rasa penasaran pada bidang Software Developer, sehari hari saya belajar untuk membuat diri berkembang dan memperbanyak pengalaman yang mendorong saya untuk cepat beradaptasi pada bidang ini.</p>
            </div>
            <div className="flex gap-4">
              <a href={cv} target='_blank' className="bg-[#555555] text-white px-5 py-3 md:px-6 font-medium hover:bg-[#444444] transition-all rounded-full">Download CV</a>
              <a href='#contact' className="text-[#555555] outline outline-1 outline-[#555555] px-5 py-3 md:px-6 font-medium hover:bg-[#444444]  hover:text-white transition-all rounded-full">Contact Info</a>
            </div>
          </div>
        </section>
        <section id="projects" className='mt-32 scroll-mt-6'>
          <div className="w-full text-center">
            <h2 className='font-bold text-3xl md:text-5xl'>Projects</h2>
          </div>
          <div className='w-full py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
              <a href='https://silantar-kmipn-v.vercel.app' className="w-full h-auto flex flex-col rounded-xl shadow-md overflow-hidden outline outline-1 outline-[#bababa55]">
                <img src={silantar} alt="aa" className="w-full h-64 object-cover object-top" />
                <div className="p-5 text-neutral-700">
                  <h3 className='text-xl text-black'>Silantar</h3>
                  <p className='text-[15px] mt-2'>Silantar adalah platform yang dibangun untuk masyarakat bisa melaporkan masalah lingkungan sekitar ke pemerintahan yang bersangkutan.</p>
                  <div className='mt-3 flex gap-3'>
                    {/* teknologi yang dipakai */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="next js icon" width={24} height={24} />
                    <img src={laravel} alt="laravel icon" width={24} height={24} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind css icon" width={24} height={24} />
                  </div>
                </div>
              </a>
              <a href='https://chemaraya.live' className="w-full h-auto flex flex-col rounded-xl shadow-md overflow-hidden outline outline-1 outline-[#bababa55]">
                <img src={chemaraya} alt="aa" className="w-full h-64 object-cover object-top" />
                <div className="p-5 text-neutral-700">
                  <h3 className='text-xl text-black'>Chemaraya</h3>
                  <p className='text-[15px] mt-2'>Website yang berguna untuk memudahkan pencinta roti bakar chemaraya dengan fitur utama yang menyediakan informasi produk serta menghubungkan pengguna ke pihak ketiga yaitu Gojek Dan Grab.</p>
                  <div className='mt-3 flex gap-3'>
                    {/* teknologi yang dipakai */}
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="php icon" width={24} height={24} />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind css icon" width={24} height={24} />
                  </div>
                </div>
              </a>

            </div>
          </div>
        </section>
        <section id="skills" className='mt-16 scroll-mt-6'>
          <div className="w-full text-center">
            <h2 className='font-bold text-3xl md:text-5xl'>Skills</h2>
          </div>
          <div className='w-full py-10'>
            <div className="flex flex-wrap justify-center gap-5 text-center">
              {skills.map((skill, index) => {
                return (
                  <div key={index} className="flex flex-col justify-center items-center px-10 py-6 bg-[#444444] rounded-xl cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all gap-2">
                    <img src={skill.icon_url} width={40} height={40} />
                    <p className="text-white font-medium text-xs">{skill.name}</p>
                  </div>
                )
              })}

            </div>


          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="p-4 border-t-2">
          <div className='flex justify-center items-center gap-2 mb-3'>
            <a href="https://github.com/bhaktiramadhani" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github icon" width={20} height={20} />
              Github
            </a>
            <a href="https://linkedin.com/in/bhakti-ramadhani/" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="github icon" width={20} height={20} />
              Linkedin
            </a>
            <a href="https://instagram.com/bhaktirmdhni" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src={instagram} alt="github icon" width={20} height={20} />
              Instagram
            </a>
          </div>
          <p className="text-center text-neutral-500">Copyright © 2024. Bhakti Ramadhani</p>
        </div>
      </footer>
    </div>
  )
}

export default App
