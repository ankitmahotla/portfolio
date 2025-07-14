import AnimatedSection from "./animated-section";

export default function Contact() {
  return (
    <AnimatedSection>
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <p className="text-muted-foreground">
        Email:{" "}
        <a href="mailto:ankitmahotla45@gmail.com" className="underline">
          ankitmahotla45@gmail.com
        </a>
      </p>
      <p className="text-muted-foreground">Phone: +91 9717011496</p>
    </AnimatedSection>
  );
}
