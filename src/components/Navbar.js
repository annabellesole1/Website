import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button className="title-font font-medium text-black mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-3xl text-black font-kurale">
            AFS
          </a>
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-black justify-center">
          <a href="#projects" className="mr-5 hover:text-gray-400">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-gray-400">
            Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-blue border-0 py-1 px-3 focus:outline-none hover:bg-darkblue rounded text-white mt-4 md:mt-0">
          Hire Me
        </a>
      </div>
    </header>
  );
}