import './Work.css';
import Project from './Project';
import ProjectTwo from './ProjectTwo';
import React from 'react';


export default function Work() {

 const projects = [
   {
     title: "React Weather App",
     info: " A minimal, responsive React application providing current weather and forecasting, hosted on Netlify. Making use of the free openweather API, location searches will return up-to-date information.",
     tech: ["VS Code", "React", "OpenWeatherApp API", "GitHub", "Bootstrap"],
     links: {
       git: "https://github.com/neiloconchuir/react-weather-app",
       website: "https://enchanting-wisp-e19296.netlify.app/",
     },
   },
   {
     title: "Personal Portfolio Website",
     info: " A responsive React website showcasing coding projects undertaken to date, hosted on Netlify.",
     tech: ["VS Code", "React", "GitHub"],
     links: {
       git: "https://github.com/neiloconchuir/personal-portfolio",
       website: "https://reliable-bublanina-f1e0d0.netlify.app/",
     },
   },
 ];

  return (
    <section className="Work" id="Work">
      <h2>
        <span>02.</span> Work Projects
      </h2>
      <Project projects={projects[0]}/>
      <ProjectTwo projects={projects[1]}/>
    </section>
  );
} 