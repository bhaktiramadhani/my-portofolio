import { skills } from "../core/data";
import Skill from "./Skill";

function SkillWrapper() {
  return (
    <section id="skills" className="mt-16 scroll-mt-6">
      <div>
        <div className="space-y-2">
          <h2
            className="font-bold text-3xl md:text-4xl"
            data-aos="zoom-in"
            data-aos-duration="500"
          >
            Skills
          </h2>
          {/* <p
            className="text-neutral-500 text-sm md:text-base"
            data-aos="fade"
            data-aos-duration="500"
          >
            Keahlian yang saya kuasai dalam berbagai{" "}
            <b className="text-[#555555]">Teknologi</b>,{" "}
            <b className="text-[#555555]">Framework</b>, dan{" "}
            <b className="text-[#555555]">Tools</b>.
          </p> */}
        </div>
        <div className="w-full py-10">
          <div className="flex flex-wrap justify-center gap-5 text-center">
            {skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  url={skill.url}
                  icon_url={skill.icon_url}
                  name={skill.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillWrapper;
