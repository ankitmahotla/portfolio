/* eslint-disable @next/next/no-img-element */
import { education } from "../data/education";
import AnimatedSection from "./animated-section";

export default function Education() {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-semibold mb-6">Education</h2>
      <div className="flex flex-col gap-8">
        {education.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img
              src={edu.image}
              alt={`${edu.school} logo`}
              className="w-12 h-12 rounded-full object-cover bg-muted border shadow"
            />
            <div>
              <h3 className="font-medium text-lg">{edu.school}</h3>
              <p className="text-muted-foreground">
                {edu.degree} <span className="text-sm">({edu.period})</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
