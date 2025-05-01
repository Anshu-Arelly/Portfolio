import { Github, ExternalLink } from 'lucide-react';
import { ProjectData } from '../../utils/types';

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-[#fffff1] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{project.title}</h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex justify-between mt-auto">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#ff6100] transition-colors"
          >
            <Github size={18} className="mr-1" />
            <span>Code</span>
          </a>
          
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-700 hover:text-[#ff6100] transition-colors"
          >
            <ExternalLink size={18} className="mr-1" />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;