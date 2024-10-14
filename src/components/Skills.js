// src/components/Skills.js

import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        
        <div className="text-center mb-20">
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h2>
        </div>
        <div className="flex lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
        <img
          src={skill} // Assuming skill is the image URL
          alt={skill} // You can set the alt text to the skill name
          className="object-contain h-16 mx-2" // Adjust dimensions as needed
        />
  
    </div>
        ))}
</div>
      </div>
    </section>
  );
}