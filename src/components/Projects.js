// src/components/Projects.js

import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-white bg-black body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Experience
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Personal, academic, and extracurricular projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative h-full">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-4 py-8 relative z-5 w-full border-4 border-lightblue bg-blue opacity-0 hover:opacity-100">
                  <div className="tracking-widest text-sm title-font font-medium text-black mb-1">
                    {project.subtitle}
                  </div>
                  <h3 className="title-font text-lg font-medium text-black mb-3">
                    {project.title}
                  </h3>
                  <p className="leading-relaxed text-white text-sm">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}