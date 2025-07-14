/* eslint-disable @next/next/no-img-element */
import { experience } from "../data/experience";
import AnimatedSection from "./animated-section";

export default function Experience() {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-semibold mb-4">Professional Experience</h2>
      <div className="flex flex-col gap-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <img
              src={exp.image}
              alt={`${exp.company} logo`}
              className="w-12 h-12 rounded-full object-cover bg-muted border shadow"
            />
            <div>
              <h3 className="font-medium text-lg">
                {exp.role}{" "}
                <span className="text-muted-foreground font-normal">
                  @ {exp.company}
                </span>
              </h3>
              <span className="text-sm text-muted-foreground">
                {exp.period}
              </span>
              <ul className="list-disc list-inside mt-2 text-muted-foreground text-sm">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
