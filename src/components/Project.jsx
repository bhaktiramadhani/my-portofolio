import github from "../assets/images/github.svg";
import link from "../assets/images/link.svg";
import TechProject from "./TechProject";
const Project = ({ img, title, desc, techs, source, demo }) => {
  return (
    <>
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover object-top"
      />
      <div className="flex flex-col flex-grow p-5 text-neutral-700">
        <h3 className="text-xl text-black">{title}</h3>
        <p className="text-[15px] mt-2">{desc}</p>
        <div className="mt-3 flex items-end gap-3 flex-grow">
          {/* teknologi yang dipakai */}
          {techs.map((tech) => (
            <TechProject
              key={tech}
              title={title}
              imgTech={tech.imgTech}
              tech={tech.tech}
            />
          ))}
        </div>
        <div className="flex gap-6 mt-6 pt-4 font-semibold text-sm md:text-base border-t">
          <a href={source} target="_blank" className="flex items-center gap-2">
            <img src={github} alt="Github Link" width={24} height={24} />
            Source Code
          </a>
          <a href={demo} target="_blank" className="flex items-center gap-2">
            <img src={link} alt="Link" width={24} height={24} />
            Live Demo
          </a>
        </div>
      </div>
    </>
  );
};

export default Project;
