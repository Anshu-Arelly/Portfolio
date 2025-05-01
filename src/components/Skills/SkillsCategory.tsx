import { SkillData } from '../../utils/types';

interface SkillsCategoryProps {
  skills: SkillData[];
}

const SkillsCategory = ({ skills }: SkillsCategoryProps) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="text-gray-800 font-medium">{skill.name}</span>
            <span className="text-[#ff6100] font-medium">{skill.proficiency}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-[#ff6100] h-2.5 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${skill.proficiency}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsCategory;