import { techStack } from "../data/tech-stack";
import AnimatedSection from "./animated-section";
import { skillIconMap } from "./skill-icons";

export default function Skills() {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-4">
        {techStack.map((skill) => {
          const Icon = skillIconMap[skill];
          return (
            <div
              key={skill}
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors text-base font-medium shadow-sm"
            >
              {Icon && <Icon size={22} className="text-primary" />}
              <span>{skill}</span>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
