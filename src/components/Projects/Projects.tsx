import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from '../../utils/types';
import { motion } from 'framer-motion';

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  
  const projects: ProjectData[] = [
    {
      id: 2,
      title: "Real Time-Retail Metrics Tracker",
      description: "A data-driven Excel project analyzing Retail Store's sales to uncover trends, customer insights, and strategies for boosting  performance.",
      image: "/images/excel.png",
      techStack: ["Excel Dashboard Creation", "Data Cleaning", "Data Analysis"],
      githubLink: "https://github.com/AnshuArelly/Real-Time-Retail-Metrics-Tracker",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Fun-Crush Response",
      description: "Crush Response is an interactive web project that generates playful, animated responses based on the user's crush's name and chosen mood",
      image: "/images/response.png",
      techStack: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/AnshuArelly/Crush-Responder",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Real-Time Sales Analysis for Hardware Business",
      description: "This project analyzes real-time sales insights for a computer hardware business using MySQL for data cleaning and Power BI for interactive reporting, aiding in strategic decision-making and market adaptation",
      image: "/images/powerBI.png",
      techStack: ["Python", "PowerBI", "MySQL"],
      githubLink: "https://github.com/AnshuArelly/Dynamic-Market-Sales-Analysis-Computer-Hardware-Business-",
      liveLink: "#"
    },]
  //   {
  //     id: 5,
  //     title: "LinkedIn Growth Analyzer",
  //     description: "A data analysis project that tracks and visualizes LinkedIn profile growth metrics over time.",
  //     techStack: ["Power BI", "Excel", "Data Analysis"],
  //     image: "/images/linkedin.png",
  //     githubLink: "https://github.com/AnshuArelly/linkedin-growth-analyzer",
  //     liveLink: "#"
  //   },
  // ];

  const loadMoreProjects = () => {
    setVisibleProjects(projects.length);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#ff6100]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Check out some of my recent technical projects that showcase my coding expertise and problem-solving abilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          {visibleProjects < projects.length ? (
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-[#ff6100] text-white rounded-full hover:bg-[#e05600] transition-colors duration-300 shadow-md"
            >
              View More Projects
            </button>
          ) : (
            <button
              onClick={showLessProjects}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300 transition-colors duration-300"
            >
              Show Less
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;