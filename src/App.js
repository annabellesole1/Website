//import logo from './logo.svg';
//import './App.css';

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function App() {
  return (
    <main className="text-black bg-white body-font font-jost">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
  );
}

