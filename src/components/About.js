
import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="font-serif title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Annabelle Sole
           
          </h1>
          <p className="mb-8 leading-relaxed">
            Hi! I'm a junior at Northwestern University studying Computer Science & Statistics. I have substantial experience in software engineering and data science, and am currently seeking a position for summer 2025. 
              
          </p>
          <div className="flex justify-center items-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-darkblue rounded text-lg">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1dafNW80rnJHJbl9dC1de3JH4iWqZS89G/view?usp=sharing"
              className="ml-4 inline-flex text-white bg-blue border-0 py-2 px-6 focus:outline-none hover:bg-darkblue hover:text-white rounded text-lg">
              Resume
            </a>
            <a href="https://www.linkedin.com/in/annabellesole/">
              <img
                  
                  className="h-8 ml-4 self-center"
                  alt="linkedin"
                  src="./linkedin-transparent.png"
                 
              />
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center ">
          <img
            className="object-cover object-center rounded h-64 w-auto"
            alt="hero"
            src="./NewHeadshot.jpeg"
          />
        </div>
      </div>
    </section>
  );
}