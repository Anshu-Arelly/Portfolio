import { useState } from 'react';
import SkillsCategory from './SkillsCategory';
import { SkillData } from '../../utils/types';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories = [
    { id: 'languages', label: 'Languages' },
    { id: 'databases', label: 'Databases/Libraries' },
    { id: 'tools', label: 'Tools' },
    { id: 'concepts', label: 'Concepts' },
  ];

  const skillsData: Record<string, SkillData[]> = {
    languages: [
      { name: 'Java', proficiency: 90 },
      { name: 'Python', proficiency: 85 },
      { name: 'HTML', proficiency: 95 },
      { name: 'CSS', proficiency: 90 },
      { name: 'JavaScript', proficiency: 85 },
      { name: 'MySQL', proficiency: 80 },
    ],
    databases: [
      
     
      { name: 'React.js', proficiency: 85 },
      { name: 'Node.js', proficiency: 85 },
      { name: 'MongoDB', proficiency: 85 },
      { name: 'Express.js', proficiency: 80 },
    ],
    tools: [
      { name: 'Power BI', proficiency: 75 },
      { name: 'Jupyter Notebook', proficiency: 85 },
      { name: 'VS Code', proficiency: 90 },
      { name: 'GitHub', proficiency: 80 },
      { name: 'Figma', proficiency: 70 },
    ],
    concepts: [
      { name: 'DBMS', proficiency: 85 },
      { name: 'Software Engineering', proficiency: 85 },
      { name: 'Object-Oriented Programming', proficiency: 90 },
      { name: 'Data Structures', proficiency: 85 },
      { name: 'Algorithms', proficiency: 80 },
    ],
  };

  return (
    <section id="skills" className="py-16 md:py-24 bg-[#fffff1]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-[#ff6100]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#ff6100] mx-auto mt-4 mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            I've developed expertise across various technologies and concepts, enabling me to build robust applications and provide valuable solutions.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm md:text-base transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-[#ff6100] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="mt-8 transition-all duration-500 animate-fadeIn">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={activeTab === category.id ? 'block' : 'hidden'}
              >
                <SkillsCategory skills={skillsData[category.id]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;