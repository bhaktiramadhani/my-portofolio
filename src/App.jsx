import cv from "./assets/CV-Bhakti-Ramadhani.pdf";
import github from "./assets/images/github.svg";
import email from "./assets/images/email.svg";
import instagram from "./assets/images/instagram.svg";
import marker from "./assets/images/marker.svg";
import profile from "./assets/images/profile.jpg";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectWrapper from "./components/ProjectWrapper";
import SkillWrapper from "./components/SkillWrapper";

function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <div className="flex flex-col font-poppins">
      <header className="w-full flex items-center justify-between px-10 lg:justify-between lg:px-16 max-w-7xl mx-auto my-4 py-3">
        <button
          onClick={() => setOpen(!open)}
          className={`${open ? "fixed" : "static"} md:hidden z-20`}
        >
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
          <ul
            className={`${
              open
                ? "fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center z-10 bg-white"
                : "hidden"
            } gap-8 font-medium text-2xl md:flex`}
          >
            <li
              className="my-3"
              onClick={() => setTimeout(() => setOpen(false), 200)}
            >
              <a
                href="#home"
                className="relative transition-all duration-500 ease-in-out hover:text-[rgb(85,85,85)] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all"
              >
                Home
              </a>
            </li>
            <li
              className="my-3"
              onClick={() => setTimeout(() => setOpen(false), 200)}
            >
              <a
                href="#projects"
                className="relative transition-all duration-500 ease-in-out hover:text-[#555555] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all"
              >
                Projects
              </a>
            </li>
            <li
              className="my-3"
              onClick={() => setTimeout(() => setOpen(false), 200)}
            >
              <a
                href="#skills"
                className="relative transition-all duration-500 ease-in-out hover:text-[#555555] after:content-[''] after:w-0 after:h-[2px] after:block after:bg-[#555555] after:absolute after:left-1/2 hover:after:w-full hover:after:left-0 after:transition-all"
              >
                Skills
              </a>
            </li>
            <li
              className="my-3"
              onClick={() => setTimeout(() => setOpen(false), 200)}
            ></li>
          </ul>
        </nav>
        <a href="https://github.com/bhaktiramadhani" target="_blank">
          <img src={github} alt="github Icon" width={42} height={42} />
        </a>
      </header>
      <main className="w-full py-20 flex flex-col mx-auto px-10 lg:px-16 max-w-7xl">
        <section
          id="home"
          className="flex justify-center gap-20 flex-wrap lg:flex-nowrap mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div>
            <div className="rounded-full w-72 h-72 md:w-96 md:h-96 overflow-hidden">
              <img
                src={profile}
                alt="Bhakti Ramadhani Profile"
                className="overflow-hidden object-cover w-full h-full object-top"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <h2 className="font-semibold text-base">Haloo, Saya</h2>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-4">
              Bhakti Ramadhani
            </h1>
            <h2 className="font-bold text-xl md:text-2xl text-[#555555] mt-2">
              <Typewriter
                options={{
                  strings: ["Front-end Developer", "Back-end Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 120,
                  delay: 40,
                }}
              />
            </h2>
            <div className="flex items-center mt-2 text-[#444444]">
              <img
                src={marker}
                alt="Icon marker"
                width="24"
                height="24"
                className="inline mr-2"
              />
              <span className="font-medium text-xs md:text-base">
                Banjarmasin, Kalimantan Selatan, Indonesia
              </span>
            </div>
            <div className="my-8">
              <p>
                Saya adalah seorang mahasiswa yang punya rasa penasaran pada
                bidang Software Developer, sehari hari saya belajar untuk
                membuat diri berkembang dan memperbanyak pengalaman yang
                mendorong saya untuk cepat beradaptasi pada bidang ini.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={cv}
                target="_blank"
                className="bg-[#555555] text-white text-sm md:text-base px-5 py-3 md:px-6 font-medium hover:bg-[#444444] transition-all rounded-full"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="text-[#555555] outline outline-1 outline-[#555555] text-sm md:text-base px-5 py-3 md:px-6 font-medium hover:bg-[#444444]  hover:text-white transition-all rounded-full"
              >
                Contact Info
              </a>
            </div>
          </div>
        </section>
        <ProjectWrapper />
        <SkillWrapper />
      </main>
      <footer id="contact">
        <div className="p-4 border-t-2">
          <div className="flex justify-center items-center gap-2 mb-3">
            <a
              href="mailto:bakti0048@gmail.com"
              target="_blank"
              className="flex items-center font-medium gap-2 p-2"
            >
              <img src={email} alt="Email icon" width={20} height={20} />
              Email
            </a>
            <a
              href="https://linkedin.com/in/bhakti-ramadhani/"
              target="_blank"
              className="flex items-center font-medium gap-2 p-2"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="Linkedin icon"
                width={20}
                height={20}
              />
              Linkedin
            </a>
            <a
              href="https://instagram.com/bhaktirmdhni"
              target="_blank"
              className="flex items-center font-medium gap-2 p-2"
            >
              <img
                src={instagram}
                alt="Instagram icon"
                width={20}
                height={20}
              />
              Instagram
            </a>
          </div>
          <p className="text-center text-neutral-500">
            Copyright © 2024. Bhakti Ramadhani
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
