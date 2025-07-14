import AnimatedSection from "./animated-section";
import { Mail, Github, Linkedin } from "lucide-react";

export default function About() {
  return (
    <AnimatedSection>
      <h1 className="text-3xl font-bold mb-2">Ankit Mahotla</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Full Stack Developer with 1+ year of experience building scalable,
        real-time web and mobile applications using React, Node.js, and modern
        cloud infrastructure.
      </p>
      <div className="flex gap-4">
        <a
          href="mailto:ankitmahotla@gmail.com"
          aria-label="Email"
          className="hover:text-primary transition-colors"
        >
          <Mail size={22} />
        </a>
        <a
          href="https://github.com/ankitmahotla"
          aria-label="GitHub"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-mahotla-012a73244/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors"
        >
          <Linkedin size={22} />
        </a>
      </div>
    </AnimatedSection>
  );
}
