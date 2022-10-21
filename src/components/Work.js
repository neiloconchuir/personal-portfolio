import './work.css';
import Project from './Project';
import React from 'react';


export default function Work() {

 const projects = [
   {
     title: "React Weather App",
     info: "A minimal, responsive React application providing current weather information and five day forecasting, hosted on Netlify.",
     tech: ["React", "OpenWeather API", "Bootstrap"],
     links: {
       git: "https://github.com/neiloconchuir/react-weather-app",
       website: "https://enchanting-wisp-e19296.netlify.app/",
     },
   },
   {
     title: "Portfolio Website",
     info: "A responsive React website showcasing coding projects undertaken to date, hosted on Netlify.",
     tech: ["VS Code", "React", "GitHub"],
     links: {
       git: "https://github.com/neiloconchuir/personal-portfolio",
       website: "https://clever-sunburst-be636a.netlify.app",
     },
   },
   {
     title: "React Dictionary App",
     info: "A responsive React application providing definitions and related pictures of searched words, hosted on Netlify.",
     tech: ["React", "multiple APIs", "Bootstrap"],
     links: {
       git: "https://github.com/neiloconchuir/react-dictionary-app",
       website: "https://starlit-blini-2955cc.netlify.app",
     },
   },
 ];

  return (
    <section className="Work" id="Work">
      <h2>
        <span>02.</span> Work Projects
      </h2>
      <div className="Work-projects">
        <Project projects={projects[0]} />
        <Project projects={projects[1]} />
        <Project projects={projects[2]} />
      </div>
    </section>
  );
} 