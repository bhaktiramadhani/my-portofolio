import cv from './assets/CV-Bhakti-Ramadhani.pdf'
import github from './assets/images/github.svg'
import email from './assets/images/email.svg'
import instagram from './assets/images/instagram.svg'
import laravel from './assets/images/laravel.svg'
import link from './assets/images/link.svg'
import marker from './assets/images/marker.svg'
import vite from './assets/images/vite.svg'
import chemaraya from './assets/images/chemaraya.png'
import profile from './assets/images/profile.jpg'
import silantar from './assets/images/silantar.png'
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML', url: 'https://www.w3schools.com/html/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: 'CSS', url: 'https://www.w3schools.com/css/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: 'Javascript', url: 'https://www.javascript.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: 'Bootstrap', url: 'https://getbootstrap.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: 'React.js', url: 'https://react.dev/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: 'Next.js', url: 'https://nextjs.org/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: 'PHP', url: 'https://www.php.net/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: 'Laravel', url: 'https://laravel.com/', icon_url: laravel },
  { name: 'MySQL', url: 'https://www.mysql.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: 'Git', url: 'https://git-scm.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: 'VS Code', url: 'https://code.visualstudio.com/', icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: 'Vite.js', url: 'https://vitejs.dev/', icon_url: vite },
];

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true
    })
  }, [])
  return (
    <div className="flex flex-col font-poppins">
      <header className="w-full flex items-center justify-between px-10 lg:justify-between lg:px-16 max-w-7xl mx-auto my-4 py-3">
        <button onClick={() => setOpen(!open)} className={`${open ? 'fixed' : 'static'} md:hidden z-20`}>
          <div className="w-10 h-10 relative">
            <svg
              className={`w-10 h-10 ${open ? "hidden" : "block"}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`w-10 h-10 ${open ? "block" : "hidden"}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
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
        <section id="home" className='flex justify-center gap-20 flex-wrap lg:flex-nowrap mx-auto' data-aos="fade-up" data-aos-duration="1000">
          <div>
            <div className="rounded-full w-72 h-72 md:w-96 md:h-96 overflow-hidden">
              <img src={profile} alt="Bhakti Ramadhani Profile" className="overflow-hidden object-cover w-full h-full object-top" />
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
                  deleteSpeed: 120,
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
              <a href={cv} target='_blank' className="bg-[#555555] text-white text-sm md:text-base px-5 py-3 md:px-6 font-medium hover:bg-[#444444] transition-all rounded-full">Download CV</a>
              <a href='#contact' className="text-[#555555] outline outline-1 outline-[#555555] text-sm md:text-base px-5 py-3 md:px-6 font-medium hover:bg-[#444444]  hover:text-white transition-all rounded-full">Contact Info</a>
            </div>
          </div>
        </section>
        <section id="projects" className='mt-32 scroll-mt-6'>
          <div className="w-full text-center">
            <h2 className='font-bold text-3xl md:text-5xl' data-aos="zoom-in" data-aos-duration="500">Projects</h2>
          </div>
          <div className='w-full py-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
              <div data-aos="fade-up" data-aos-duration="1000" className="w-full h-auto flex flex-col rounded-xl shadow-md overflow-hidden outline outline-1 outline-[#bababa55] hover:!scale-[1.01] hover:shadow-lg transition-all duration-300">
                <img src={silantar} alt="Silantar" className="w-full h-64 object-cover object-top" />
                <div className="flex flex-col flex-grow p-5 text-neutral-700">
                  <h3 className='text-xl text-black'>Silantar</h3>
                  <p className='text-[15px] mt-2'>Silantar adalah platform yang dibangun untuk masyarakat bisa melaporkan masalah lingkungan sekitar ke pemerintahan yang bersangkutan.</p>
                  <div className='mt-3 flex items-end gap-3 flex-grow'>
                    {/* teknologi yang dipakai */}

                    {/* next js */}
                    <img data-popover-target="popover-1" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" className='max-h-6' alt="next js icon" width={24} height={24} />
                    <div data-popover id="popover-1" role="tooltip" className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0">
                      <div className="px-3 py-2">
                        <p>Next.js</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>

                    {/* laravel */}
                    <img data-popover-target="popover-2" src={laravel} className='max-h-6' alt="laravel icon" width={24} height={24} />
                    <div data-popover id="popover-2" role="tooltip" className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0">
                      <div className="px-3 py-2">
                        <p>Laravel</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>

                    {/* Tailwind */}
                    <img data-popover-target="popover-3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='max-h-6' alt="tailwind css icon" width={24} height={24} />
                    <div data-popover id="popover-3" role="tooltip" className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0">
                      <div className="px-3 py-2">
                        <p>Tailwind CSS</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                  <div className='flex gap-6 mt-6 pt-4 font-semibold text-sm md:text-base border-t'>
                    <a href='https://github.com/Sangoveka-Team/Silantar-KMIPN-V' target='_blank' className='flex items-center gap-2'>
                      <img src={github} alt="Github Link" width={24} height={24} />
                      Source Code
                    </a>
                    <a href="https://silantar-kmipn-v.vercel.app" target='_blank' className='flex items-center gap-2'>
                      <img src={link} alt="Link" width={24} height={24} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" data-aos-duration="1000" className="w-full h-auto flex flex-col rounded-xl shadow-md overflow-hidden outline outline-1 outline-[#bababa55] hover:!scale-[1.01] hover:shadow-lg transition-all duration-300">
                <img src={chemaraya} alt="chemaraya" className="w-full h-64 object-cover object-top" />
                <div className="flex flex-col flex-grow p-5 text-neutral-700">
                  <h3 className='text-xl text-black'>Chemaraya</h3>
                  <p className='text-[15px] mt-2'>Website yang berguna untuk memudahkan pencinta roti bakar chemaraya dengan fitur utama yang menyediakan informasi produk serta menghubungkan pengguna ke pihak ketiga yaitu Gojek Dan Grab.</p>
                  <div className='mt-3 flex items-end gap-3 flex-grow'>
                    {/* teknologi yang dipakai */}
                    {/* php */}
                    <img data-popover-target="popover-4" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" className='max-h-6' alt="php icon" width={24} height={24} />
                    <div data-popover id="popover-4" role="tooltip" className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0">
                      <div className="px-3 py-2">
                        <p>PHP</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                    {/* Tailwind */}
                    <img data-popover-target="popover-5" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" className='max-h-6' alt="tailwind css icon" width={24} height={24} />
                    <div data-popover id="popover-5" role="tooltip" className="absolute z-10 invisible inline-block w-auto text-sm text-white transition-opacity duration-300 bg-[#777777] border border-gray-200 rounded-lg shadow-sm opacity-0">
                      <div className="px-3 py-2">
                        <p>Tailwind CSS</p>
                      </div>
                      <div data-popper-arrow></div>
                    </div>
                  </div>
                  <div className='flex gap-6 mt-6 pt-4 font-semibold text-sm md:text-base border-t'>
                    <a href='https://github.com/bhaktiramadhani/pbl-semester-3' target='_blank' className='flex items-center gap-2'>
                      <img src={github} alt="Github Link" width={24} height={24} />
                      Source Code
                    </a>
                    <a href="https://chemaraya.live" target='_blank' className='flex items-center gap-2'>
                      <img src={link} alt="Link" width={24} height={24} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section id="skills" className='mt-16 scroll-mt-6'>
          <div className="w-full text-center">
            <h2 className='font-bold text-3xl md:text-5xl' data-aos="zoom-in" data-aos-duration="500">Skills</h2>
          </div>
          <div className='w-full py-10'>
            <div className="flex flex-wrap justify-center gap-5 text-center">
              {skills.map((skill, index) => {
                return (
                  <a href={skill.url} target='_blank' key={index} data-aos="zoom-in" data-aos-duration="500" className="flex flex-col justify-center items-center px-10 py-6 bg-[#444444] rounded-xl cursor-pointer shadow-md hover:shadow-lg hover:!scale-105 transition-all duration-200 gap-2" >
                    <img src={skill.icon_url} alt={skill.name} width={40} height={40} />
                    <p className="text-white font-medium text-xs">{skill.name}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <footer id="contact">
        <div className="p-4 border-t-2">
          <div className='flex justify-center items-center gap-2 mb-3'>
            <a href="mailto:bakti0048@gmail.com" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src={email} alt="Email icon" width={20} height={20} />
              Email
            </a>
            <a href="https://linkedin.com/in/bhakti-ramadhani/" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="Linkedin icon" width={20} height={20} />
              Linkedin
            </a>
            <a href="https://instagram.com/bhaktirmdhni" target='_blank' className='flex items-center font-medium gap-2 p-2'>
              <img src={instagram} alt="Instagram icon" width={20} height={20} />
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
