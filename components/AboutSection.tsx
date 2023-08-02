import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React.js" },
  { skill: "Node.js" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Material Ui" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "MsSqlServer" },
  { skill: "MongoDB" },
  { skill: "JIRA" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hello there! my name is Sumit Rawat and I am a highly ambitious
              and self-motivated fullstack developer based in Delhi , India.
            </p>
            <br />
            <p>
              I've done my post-graduation from Ganga Institute of technology
              and management, Jhajjar ,Haryana in 2022 with a Masters in
              Computer Application.
            </p>
            <br />
            <p>
              I am a passionate and dedicated full-stack developer with a knack
              for crafting robust and user-friendly web applications , I thrive
              on tackling complex challenges and turning them into elegant
              solutions. My technical expertise spans the entire stack, from
              front-end technologies like HTML, CSS, and JavaScript,React to
              back-end frameworks such as Node.js.
            </p>
            <br />
            <p>
              I am well-versed in working with databases like MySQL and MongoDB
              and I possess a deep understanding of RESTful APIs . I
              continuously strive to stay up-to-date with the latest industry
              technologies, always looking for opportunities to enhance my skill
              set.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-red-600 px-4 py-2 mr-2 mt-2 text-white rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
