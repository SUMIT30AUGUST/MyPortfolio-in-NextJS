import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "E-commerce Website",
    description:
      "E-commerce website developed using MERN stack + React Material UI framework for pre build React components and Redux for State Management.",
    image: "/ecommwebsite.png",
    github: "https://github.com/SUMIT30AUGUST/E-Comm-Website",
    link: "",
  },
  {
    name: "News Website",
    description:
      "The React.js News Application is a cutting-edge platform that provides users with the latest and most relevant news from various sources worldwide. Developed using React.js for the front-end, Bootstrap for responsive styling, and integrated with the News API, this application offers an intuitive and visually engaging way for users to stay informed on current events and trending topics.",
    image: "/news22.jpeg",
    github: "https://github.com/SUMIT30AUGUST/News-Site-in-React-js",
    link: "",
  },
  {
    name: "Chat Application",
    description:
      "The Real-Time Chat Application is a feature-rich, interactive platform designed to facilitate seamless communication between users. Built using Node.js and the Socket.IO library, this project enables real-time, bi-directional communication, allowing users to send and receive messages instantly. ",
    image: "/chat.jpg",
    github: "https://github.com/SUMIT30AUGUST/RealTime-Chat-WebApp",
    link: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
