import './Work.css';
import Project from './Project';
import React from 'react';


export default function Work() {

 const projects = 
   {
     title: "React Weather App",
     info: " A minimal, responsive React application providing current weather and forecasting, hosted on Netlify. Making use of the free openweather API, location searches will return up-to-date information.",
     tech: ["VS Code", "React", "OpenWeatherApp API", "GitHub"],
     links: {
       git: "https://github.com/neiloconchuir/react-weather-app",
       website: "https://enchanting-wisp-e19296.netlify.app/",
     },
   };

  return (
    <section className="Work" id="Work">
      <h2>
        <span>03.</span> Work Projects
      </h2>
      <Project projects={projects}/>
    </section>
  );
} 